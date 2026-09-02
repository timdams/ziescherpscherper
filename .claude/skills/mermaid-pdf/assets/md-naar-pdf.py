# -*- coding: utf-8 -*-
"""Rendert een markdown- of qmd-bestand met mermaid-diagrammen naar pdf.

    python md-naar-pdf.py <bestand.md> [--subtitle "..."] [--author "..."] [--uit pad.pdf]

Vereist Quarto en Chrome. De werkbestanden komen in een tijdelijke map, enkel
de pdf blijft staan.

Wat dit script rechtzet, en waarom het nodig is: zie SKILL.md, sectie
"De vier valkuilen". Kort:

1. plain ```mermaid wordt ```{mermaid}, anders blijft het een codeblok
2. useMaxWidth: false, anders kapt Chrome een lange boom onderaan af
3. htmlLabels: false, anders struikelt typst over de svg
4. elke figuur wordt op de pagina gepast. Wat niet op A4 past, krijgt een
   eigen uitvouwpagina

Kijk na afloop altijd naar de pagina's met de Read tool. Een afgekapte figuur
geeft geen foutmelding.
"""
import argparse
import io
import os
import re
import shutil
import struct
import subprocess
import sys
import tempfile

SHELL = os.name == 'nt'          # op Windows is quarto een .cmd

INIT = ("%%%%{init: {'htmlLabels': false, 'flowchart': "
        "{'htmlLabels': false, 'useMaxWidth': false, 'rankSpacing': 22, "
        "'nodeSpacing': %d, 'padding': 4}}}%%%%\n")

PW, PH = 6.69, 9.60      # tekstvlak op A4 bij 2 cm marge, in inch
PH_FIG = 8.60            # laat plaats voor een kop en een regel tekst erboven
DREMPEL = 0.55           # onder deze schaal is een figuur onleesbaar op A4

KOP = '''---
title: "{titel}"
{extra}lang: nl
mermaid-format: png
format:
  typst:
    papersize: a4
    mainfont: "Arial"
    keep-typ: true
    margin:
      x: 2cm
      y: 2cm
---

'''


def cellen(body):
    """Zet plain mermaid-fences om in cellen en zet de afstanden krap."""

    def cel(m):
        code = m.group(1)
        # in een LR-boom staan de takken onder elkaar. Te dicht op elkaar en
        # hun kantlabels overlappen
        afstand = 45 if 'flowchart LR' in code else 18
        return '```{mermaid}\n' + INIT % afstand + code + '\n```'

    return re.sub(r'```\{?mermaid\}?\n(.*?)\n```', cel, body, flags=re.S)


def maak_qmd(bron, werkmap, subtitle, author):
    src = io.open(bron, encoding='utf-8').read()

    if src.startswith('---\n'):
        # eigen frontmatter: laat ze staan, maar zorg dat mermaid als png komt
        eind = src.index('\n---\n', 4) + 5
        fm, body = src[:eind], src[eind:]
        if 'mermaid-format:' not in fm:
            fm = fm[:-5] + 'mermaid-format: png\n---\n'
        if 'keep-typ:' not in fm:
            print('let op: zet keep-typ: true bij format.typst, anders kan dit '
                  'script de figuren niet passen')
        uit = fm + cellen(body)
    else:
        regels = src.split('\n')
        titel = regels[0][2:].strip() if regels[0].startswith('# ') else 'Zonder titel'
        body = '\n'.join(regels[1:]).lstrip('\n') if regels[0].startswith('# ') else src
        extra = ''
        if subtitle:
            extra += 'subtitle: "%s"\n' % subtitle
        if author:
            extra += 'author: "%s"\n' % author
        uit = KOP.format(titel=titel, extra=extra) + cellen(body)

    io.open(os.path.join(werkmap, 'doc.qmd'), 'w',
            encoding='utf-8', newline='').write(uit)


def png_maat(pad):
    return struct.unpack('>II', io.open(pad, 'rb').read(33)[16:24])


def pas_figuren(werkmap):
    typ_pad = os.path.join(werkmap, 'doc.typ')
    typ = io.open(typ_pad, encoding='utf-8').read()

    def pas(m):
        pad = m.group(1)
        # de maten die Quarto in de typst schrijft wijken af van de png zelf
        px_b, px_h = png_maat(os.path.join(werkmap, pad.replace('\\\\', '/')))
        breed = float(m.group(3))
        hoog = breed * px_h / px_b
        if min(PW / breed, PH / hoog) >= DREMPEL:
            b = breed * min(PW / breed, PH_FIG / hoog)
            return '#align(center)[#image("%s", width: %.2fin)]' % (pad, b)
        paginahoogte = PW * (hoog / breed) + 1.8
        return ('#page(width: 8.27in, height: %.2fin, '
                'margin: (x: 0.79in, y: 0.6in), header: none, footer: none)['
                % paginahoogte
                + '#align(center + horizon)[#image("%s", width: %.2fin)]'
                % (pad, PW)
                + ']')

    # de figuur zit in twee geneste blokken. Daar mag #page niet in staan
    patroon = (r'#block\[\s*#block\[\s*'
               r'#box\(image\("([^"]+)",\s*height:\s*([\d.]+)in,'
               r'\s*width:\s*([\d.]+)in\)\)'
               r'\s*\]\s*\]')
    typ, n = re.subn(patroon, pas, typ)
    io.open(typ_pad, 'w', encoding='utf-8', newline='').write(typ)
    return n


def main():
    p = argparse.ArgumentParser()
    p.add_argument('bron')
    p.add_argument('--subtitle', default='')
    p.add_argument('--author', default='Tim Dams')
    p.add_argument('--uit', default='')
    a = p.parse_args()

    bron = os.path.abspath(a.bron)
    pdf = os.path.abspath(a.uit) if a.uit else os.path.splitext(bron)[0] + '.pdf'

    werkmap = tempfile.mkdtemp(prefix='md-naar-pdf-')
    try:
        maak_qmd(bron, werkmap, a.subtitle, a.author)
        subprocess.run(['quarto', 'render', 'doc.qmd', '--to', 'typst'],
                       cwd=werkmap, check=True, shell=SHELL,
                       stdout=subprocess.DEVNULL)
        print('%d figuren op de pagina gepast' % pas_figuren(werkmap))
        subprocess.run(['quarto', 'typst', 'compile', 'doc.typ', 'doc.pdf'],
                       cwd=werkmap, check=True, shell=SHELL)
        shutil.copyfile(os.path.join(werkmap, 'doc.pdf'), pdf)
        print(pdf)
    finally:
        shutil.rmtree(werkmap, ignore_errors=True)


if __name__ == '__main__':
    sys.exit(main())
