"""Controle van de pdf van het handboek. Zie .claude/pdf-afspraken.md.

    python scripts/pdf-controle/pdfcontrole.py analyse build/Zie-Scherp-Scherper.pdf
    python scripts/pdf-controle/pdfcontrole.py pagina  build/Zie-Scherp-Scherper.pdf "Jawadde" "#123"
    python scripts/pdf-controle/pdfcontrole.py contact build/Zie-Scherp-Scherper.pdf

analyse  meet per hoofdstuk hoe ver de inhoud op elke pagina reikt en meldt:
           wees       laatste pagina van een hoofdstuk, minder dan 17% gevuld (ca. 5 regels)
           kort       laatste pagina, 17 tot 30% gevuld (meestal in orde, even kijken)
           gat        pagina middenin een hoofdstuk, minder dan 60% gevuld
           leeg       pagina zonder inhoud
           grote-afb  afbeelding groter dan 35% van de pagina
pagina   zet pagina's als png in de uitmap: per tekstfragment (max. 3 treffers) of #paginanummer
contact  alle pagina's als miniaturen, 24 per blad, om snel door het hele boek te bladeren

Uitmap: --uit <map>, standaard boekPrintTest/preview/controle (gitignored).
Nodig:  pip install pymupdf pillow
"""
import argparse
import json
import os

import pymupdf
from PIL import Image, ImageDraw

KOP = 62     # pt: koptekst en voettekst tellen niet mee
MARGE = 85   # pt: 3 cm boven- en ondermarge, zie margin in _quarto.yml


def is_deelpagina(pg):
    """Deelpagina's (H1: ..., Appendix, ...) hebben een gekleurd vlak over de hele pagina."""
    b, h = pg.rect.width, pg.rect.height
    return any(d.get("fill") and d["rect"].width > b * 0.9 and d["rect"].height > h * 0.9
               for d in pg.get_drawings())


def meet(pg):
    """(vulling, grootste afbeelding): hoe ver de inhoud reikt, als fractie van de teksthoogte."""
    b, h = pg.rect.width, pg.rect.height
    ys, afb = [], [0.0]
    for blok in pg.get_text("dict")["blocks"]:
        if blok["type"] != 0:
            continue
        for regel in blok["lines"]:
            y0, y1 = regel["bbox"][1], regel["bbox"][3]
            if y1 < KOP or y0 > h - KOP:
                continue
            if "".join(s["text"] for s in regel["spans"]).strip():
                ys.append(y1)
    for info in pg.get_image_info():
        x0, y0, x1, y1 = info["bbox"]
        if y1 > KOP and y0 < h - KOP:
            ys.append(y1)
            afb.append((x1 - x0) * (y1 - y0) / (b * h))
    for d in pg.get_drawings():  # codeblokken, callouts, svg-figuren
        r = d["rect"]
        if r.height > 20 and 60 < r.width < b * 0.9 and r.y1 > KOP and r.y0 < h - KOP:
            ys.append(r.y1)
    if not ys:
        return 0.0, 0.0
    return max(0.0, (max(ys) - MARGE) / (h - 2 * MARGE)), max(afb)


def hoofdstukken(doc):
    """(titel, eerste, laatste pagina) uit de bladwijzers, zonder de deelpagina erna."""
    toc = doc.get_toc(simple=True)
    top = min(niveau for niveau, _, _ in toc)
    starts = [(titel, p) for niveau, titel, p in toc if niveau == top]
    uit = []
    for i, (titel, p) in enumerate(starts):
        eind = starts[i + 1][1] - 1 if i + 1 < len(starts) else doc.page_count
        while eind > p and is_deelpagina(doc[eind - 1]):
            eind -= 1
        if eind >= p:
            uit.append((titel, p, eind))
    return uit


def analyse(doc, args):
    rapport, telling = [], {}
    for titel, van, tot in hoofdstukken(doc):
        paginas = []
        for p in range(van, tot + 1):
            vulling, afb = meet(doc[p - 1])
            m = []
            if vulling == 0:
                m.append("leeg")
            elif p == tot and tot > van and vulling < 0.17:
                m.append("wees")
            elif p == tot and tot > van and vulling < 0.3:
                m.append("kort")
            elif p < tot and vulling < 0.6:
                m.append("gat")
            if afb > 0.35:
                m.append("grote-afb")
            for x in m:
                telling[x] = telling.get(x, 0) + 1
            paginas.append(dict(pagina=p, vulling=round(vulling, 2), afbeelding=round(afb, 2), markering=m))
        rapport.append(dict(titel=titel, van=van, tot=tot, paginas=paginas))
        gemeld = [x for x in paginas if x["markering"]]
        if gemeld or args.alles:
            print(f"{van:4d}-{tot:4d}  {titel}")
            for x in gemeld:
                print(f"        p{x['pagina']}  {','.join(x['markering'])}  vulling {x['vulling']}  afb {x['afbeelding']}")
    print(f"\n{doc.page_count} pagina's, {len(rapport)} hoofdstukken, markeringen: {telling or 'geen'}")
    if args.json:
        with open(args.json, "w", encoding="utf8") as f:
            json.dump(rapport, f, indent=1, ensure_ascii=False)


def pagina(doc, args):
    os.makedirs(args.uit, exist_ok=True)
    for wat in args.wat:
        if wat.startswith("#"):
            treffers = [int(wat[1:])]
        else:
            treffers = [i + 1 for i in range(doc.page_count) if doc[i].search_for(wat)]
        print(f"{wat!r}: pagina {treffers}")
        for p in treffers[:3]:
            pad = os.path.join(args.uit, f"p{p:04d}.png")
            doc[p - 1].get_pixmap(dpi=args.dpi).save(pad)
            print("   ", pad)


def contact(doc, args):
    os.makedirs(args.uit, exist_ok=True)
    kolommen, rijen, b = 6, 4, 190
    h = int(b * 842 / 595)
    per = kolommen * rijen
    for start in range(0, doc.page_count, per):
        blad = Image.new("RGB", (kolommen * (b + 8), rijen * (h + 22)), "#888")
        teken = ImageDraw.Draw(blad)
        for i in range(min(per, doc.page_count - start)):
            p = start + i
            pix = doc[p].get_pixmap(matrix=pymupdf.Matrix(b / 595, b / 595))
            im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
            x, y = (i % kolommen) * (b + 8) + 4, (i // kolommen) * (h + 22) + 18
            blad.paste(im.resize((b, h)), (x, y))
            teken.text((x, y - 15), f"p{p + 1}", fill="white")
        pad = os.path.join(args.uit, f"blad_{start + 1:04d}.png")
        blad.save(pad)
        print(pad)


def main():
    basis = argparse.ArgumentParser(add_help=False)
    basis.add_argument("pdf")
    basis.add_argument("--uit", default=os.path.join("boekPrintTest", "preview", "controle"))
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="actie", required=True)
    a = sub.add_parser("analyse", parents=[basis])
    a.add_argument("--alles", action="store_true", help="ook hoofdstukken zonder markering tonen")
    a.add_argument("--json", help="volledig rapport wegschrijven als json")
    p = sub.add_parser("pagina", parents=[basis])
    p.add_argument("wat", nargs="+", help='tekstfragment of "#paginanummer"')
    p.add_argument("--dpi", type=int, default=60)
    sub.add_parser("contact", parents=[basis])
    args = parser.parse_args()
    doc = pymupdf.open(args.pdf)
    {"analyse": analyse, "pagina": pagina, "contact": contact}[args.actie](doc, args)


if __name__ == "__main__":
    main()
