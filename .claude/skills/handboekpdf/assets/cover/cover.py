r"""Bouwt een A4-cover als zelfstandige SVG, met alle tekst als outlines.

Vertrekbasis voor een nieuw boek. Kopieer deze map (cover.py + svgtekst.py) naar
je project, pas het configblok hieronder aan en draai:

    python cover/cover.py              -> cover.svg + cover.png
    python cover/cover.py --varianten  -> kleurproeven in varianten/

Nodig: pip install fonttools pillow numpy. De fonts komen uit C:\Windows\Fonts,
dus dit draait op Windows. De png is enkel om naar te kijken; de pdf gebruikt de svg.

Waarom outlines en geen <text>: de machine die de pdf bouwt (bv. een GitHub
Actions-runner) heeft Arial niet en kiest dan zelf maar een font.
"""
import argparse
import json
import os
import subprocess

import svgtekst

HERE = os.path.dirname(os.path.abspath(__file__))

# --- Configblok: hier pas je alles aan --------------------------------------

# A4 in tienden van een millimeter
W, H = 2100.0, 2970.0

TITEL = ["Titel", "over meerdere", "regels"]
ONDERTITEL = ["Eerste regel ondertitel", "tweede regel ondertitel"]
BANNER = "Bannertekst bovenaan"          # None = geen banner
AUTEUR = "DOOR VOORNAAM NAAM"
EDITIE = "Eerste editie"
OPBOUW = None                            # tekst = zwarte balk onderaan, None = geen balk

FONT = "arial.ttf"
FONT_BOLD = "arialbd.ttf"

# Optionele vectorillustratie: een json met {"breedte": <getal in eigen eenheden>,
# "paden": [{"d": "<svg path>", "fill": "accent"|"#hex"}, ...]}. Zet op None als
# je geen illustratie hebt; dan blijft het bovenvlak leeg.
ART_JSON = None

GRIJS = "#E6E6E6"
ZWART = "#000000"
WIT = "#FFFFFF"

# Verticale opbouw als fractie van de paginahoogte, breedtes als fractie van de
# paginabreedte. Alles is A4-relatief, dus je kan schuiven zonder iets te breken.
Y_SPLIT = 0.419          # grens tussen het grijze vlak en het kleurvlak
Y_BANNER = 0.0285        # bovenkant banner
H_BANNER = 0.0220
B_BANNER = 0.590         # breedte van het bannervlak
B_BANNERTEKST = 0.300
Y_ART = 0.129            # bovenkant illustratie
B_ART = 0.800
Y_TITEL = 0.5175         # basislijn van de eerste titelregel
D_TITEL = 0.0970         # regelafstand titel
B_TITEL = 0.580          # breedte van de langste titelregel
Y_ONDER = 0.760
D_ONDER = 0.0320
B_ONDER = 0.450
Y_AUTEUR = 0.8975
B_AUTEUR = 0.386
SP_AUTEUR = 0.18         # letterspatiering auteursregel, in em
Y_EDITIE = 0.9390
B_EDITIE = 0.111
Y_OPBOUW = 0.9625        # bovenkant opbouwbalk, die loopt door tot de bladrand
B_OPBOUW = 0.520
SP_OPBOUW = 0.12

VARIANTEN = {
    "oranje": ("#F29400", "#E8112D"),    # (accentvlak, bannervlak)
    "rood": ("#CC0000", "#1A1A1A"),
    "petrol": ("#0E7C86", "#E8112D"),
    "paars": ("#6B3FA0", "#F29400"),
}
STANDAARD = "oranje"

# --- Vanaf hier hoef je niets meer aan te raken -----------------------------


def _grootte(font, tekst, doelbreedte, spatiering=0.0):
    """Fontgrootte zodat `tekst` exact `doelbreedte` breed wordt."""
    return doelbreedte / font.breedte(tekst, 1.0, spatiering)


def bouw(accent, banner_kleur):
    gewoon = svgtekst.font(FONT)
    vet = svgtekst.font(FONT_BOLD)

    d = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" '
         f'width="{W / 10:.0f}mm" height="{H / 10:.0f}mm">']
    d.append(f'<rect width="{W:.0f}" height="{H:.0f}" fill="{GRIJS}"/>')
    d.append(f'<rect y="{Y_SPLIT * H:.1f}" width="{W:.0f}" '
             f'height="{H - Y_SPLIT * H:.1f}" fill="{accent}"/>')

    if BANNER:
        bh = H_BANNER * H
        by = Y_BANNER * H
        bw = B_BANNER * W
        d.append(f'<rect x="{(W - bw) / 2:.1f}" y="{by:.1f}" width="{bw:.1f}" '
                 f'height="{bh:.1f}" fill="{banner_kleur}"/>')
        gr = _grootte(gewoon, BANNER, B_BANNERTEKST * W)
        basis = by + bh / 2 + 0.355 * gr        # optisch centreren op cap-hoogte
        d.append(f'<path fill="{WIT}" d="{gewoon.pad(BANNER, gr, W / 2, basis, anker="middle")}"/>')

    if ART_JSON:
        art = json.load(open(os.path.join(HERE, ART_JSON), encoding="utf-8"))
        aw = B_ART * W
        schaal = aw / art["breedte"]
        d.append(f'<g transform="translate({(W - aw) / 2:.1f} {Y_ART * H:.1f}) '
                 f'scale({schaal:.5f})">')
        for pad in art["paden"]:
            kleur = accent if pad.get("fill") == "accent" else pad.get("fill", ZWART)
            d.append(f'<path fill-rule="evenodd" fill="{kleur}" d="{pad["d"]}"/>')
        d.append("</g>")

    gr = _grootte(gewoon, max(TITEL, key=len), B_TITEL * W)
    for i, regel in enumerate(TITEL):
        y = (Y_TITEL + i * D_TITEL) * H
        d.append(f'<path fill="{ZWART}" d="{gewoon.pad(regel, gr, W / 2, y, anker="middle")}"/>')

    gr = _grootte(gewoon, max(ONDERTITEL, key=len), B_ONDER * W)
    for i, regel in enumerate(ONDERTITEL):
        y = (Y_ONDER + i * D_ONDER) * H
        d.append(f'<path fill="{WIT}" d="{gewoon.pad(regel, gr, W / 2, y, anker="middle")}"/>')

    gr = _grootte(gewoon, AUTEUR, B_AUTEUR * W, SP_AUTEUR)
    d.append(f'<path fill="{WIT}" d="'
             f'{gewoon.pad(AUTEUR, gr, W / 2, Y_AUTEUR * H, SP_AUTEUR, "middle")}"/>')

    gr = _grootte(vet, EDITIE, B_EDITIE * W)
    d.append(f'<path fill="{ZWART}" d="{vet.pad(EDITIE, gr, W / 2, Y_EDITIE * H, anker="middle")}"/>')

    if OPBOUW:
        oy = Y_OPBOUW * H
        d.append(f'<rect y="{oy:.1f}" width="{W:.0f}" height="{H - oy:.1f}" fill="{ZWART}"/>')
        gr = _grootte(vet, OPBOUW, B_OPBOUW * W, SP_OPBOUW)
        basis = oy + (H - oy) / 2 + 0.355 * gr
        d.append(f'<path fill="{WIT}" d="{vet.pad(OPBOUW, gr, W / 2, basis, SP_OPBOUW, "middle")}"/>')

    d.append("</svg>")
    return "\n".join(d)


def png(svg_pad, png_pad, ppi=120):
    """Voorbeeld-png via de typst die bij Quarto zit."""
    typ = svg_pad.replace(".svg", "._preview.typ")
    with open(typ, "w", encoding="utf-8") as f:
        f.write(f'#set page(width: {W / 10}mm, height: {H / 10}mm, margin: 0pt)\n'
                f'#image("{os.path.basename(svg_pad)}", width: 100%, height: 100%)\n')
    subprocess.run(["quarto", "typst", "compile", typ, png_pad, "--ppi", str(ppi)],
                   check=True, shell=os.name == "nt")
    os.remove(typ)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--kleur", default=STANDAARD, choices=sorted(VARIANTEN))
    p.add_argument("--varianten", action="store_true")
    args = p.parse_args()

    if args.varianten:
        uit = os.path.join(HERE, "varianten")
        os.makedirs(uit, exist_ok=True)
        for naam, (accent, banner) in VARIANTEN.items():
            svg = os.path.join(uit, f"cover-{naam}.svg")
            open(svg, "w", encoding="utf-8").write(bouw(accent, banner))
            png(svg, os.path.join(uit, f"cover-{naam}.png"), ppi=90)
            os.remove(svg)   # enkel de proef-png's houden we bij
            print("varianten/cover-" + naam + ".png")
        return

    accent, banner = VARIANTEN[args.kleur]
    svg = os.path.join(HERE, "cover.svg")
    open(svg, "w", encoding="utf-8").write(bouw(accent, banner))
    png(svg, os.path.join(HERE, "cover.png"))
    print("cover.svg + cover.png geschreven (" + args.kleur + ")")


if __name__ == "__main__":
    main()
