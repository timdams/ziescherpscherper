"""Genereert de cover van Zie Scherp Scherper als zelfstandige SVG (A4).

Alles is vector: de bril komt uit bril.json (getraceerd uit de vorige editie),
alle tekst wordt omgezet naar outlines. Zo hangt de render niet af van fonts
op de machine die bouwt.

Gebruik:  python maak_cover.py            -> cover.svg + cover.png
          python maak_cover.py --varianten -> extra kleurproeven in varianten/
"""
import argparse
import json
import os
import subprocess
import svgtekst

HERE = os.path.dirname(os.path.abspath(__file__))

# A4 in tienden van een millimeter
W, H = 2100.0, 2970.0

TITEL = ["Zie", "Scherp", "Scherper"]
ONDERTITEL = ["Leren programmeren in C#", "van beginner naar gevorderde"]
BANNER = "Visual Studio 2026 editie"
AUTEUR = "DOOR TIM DAMS"
EDITIE = "Vierde editie"

GRIJS = "#E6E6E6"
ZWART = "#000000"
WIT = "#FFFFFF"

# verticale opbouw, als fractie van de paginahoogte
Y_SPLIT = 0.419          # grens grijs / kleurvlak
Y_BANNER = 0.0285        # bovenkant banner
H_BANNER = 0.0220
Y_BRIL = 0.129           # bovenkant bril
B_BRIL = 0.800           # breedte bril als fractie van de paginabreedte
Y_TITEL = 0.5175         # basislijn eerste titelregel
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


def _grootte(font, tekst, doelbreedte, spatiering=0.0):
    """Fontgrootte zodat `tekst` exact `doelbreedte` breed wordt."""
    return doelbreedte / font.breedte(tekst, 1.0, spatiering)


def bouw(accent, banner_kleur):
    arial = svgtekst.font("arial.ttf")
    arial_bold = svgtekst.font("arialbd.ttf")
    bril = json.load(open(os.path.join(HERE, "bril.json"), encoding="utf-8"))

    d = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" '
         f'width="{W / 10:.0f}mm" height="{H / 10:.0f}mm">']
    d.append(f'<rect width="{W:.0f}" height="{H:.0f}" fill="{GRIJS}"/>')
    d.append(f'<rect y="{Y_SPLIT * H:.1f}" width="{W:.0f}" '
             f'height="{H - Y_SPLIT * H:.1f}" fill="{accent}"/>')

    # banner met de Visual Studio-versie
    bh = H_BANNER * H
    by = Y_BANNER * H
    bw = 0.590 * W
    d.append(f'<rect x="{(W - bw) / 2:.1f}" y="{by:.1f}" width="{bw:.1f}" '
             f'height="{bh:.1f}" fill="{banner_kleur}"/>')
    gr = _grootte(arial, BANNER, 0.300 * W)
    basis = by + bh / 2 + 0.355 * gr        # optisch centreren op cap-hoogte
    d.append(f'<path fill="{WIT}" d="{arial.pad(BANNER, gr, W / 2, basis, anker="middle")}"/>')

    # de bril
    bw = B_BRIL * W
    schaal = bw / bril["breedte"]
    bx, byy = (W - bw) / 2, Y_BRIL * H
    d.append(f'<g transform="translate({bx:.1f} {byy:.1f}) scale({schaal:.5f})">')
    d.append(f'<path fill-rule="evenodd" fill="{accent}" d="{bril["montuur"]}"/>')
    d.append(f'<path fill-rule="evenodd" fill="{ZWART}" d="{bril["letters"]}"/>')
    d.append("</g>")

    # titel
    gr = _grootte(arial, max(TITEL, key=len), B_TITEL * W)
    for i, regel in enumerate(TITEL):
        y = (Y_TITEL + i * D_TITEL) * H
        d.append(f'<path fill="{ZWART}" d="{arial.pad(regel, gr, W / 2, y, anker="middle")}"/>')

    # ondertitel
    gr = _grootte(arial, max(ONDERTITEL, key=len), B_ONDER * W)
    for i, regel in enumerate(ONDERTITEL):
        y = (Y_ONDER + i * D_ONDER) * H
        d.append(f'<path fill="{WIT}" d="{arial.pad(regel, gr, W / 2, y, anker="middle")}"/>')

    # auteur
    gr = _grootte(arial, AUTEUR, B_AUTEUR * W, SP_AUTEUR)
    d.append(f'<path fill="{WIT}" d="'
             f'{arial.pad(AUTEUR, gr, W / 2, Y_AUTEUR * H, SP_AUTEUR, "middle")}"/>')

    # editievermelding
    gr = _grootte(arial_bold, EDITIE, B_EDITIE * W)
    d.append(f'<path fill="{ZWART}" d="'
             f'{arial_bold.pad(EDITIE, gr, W / 2, Y_EDITIE * H, anker="middle")}"/>')

    d.append("</svg>")
    return "\n".join(d)


def png(svg_pad, png_pad, ppi=120):
    """Voorbeeld-PNG via de typst die bij Quarto zit."""
    typ = svg_pad.replace(".svg", "._preview.typ")
    with open(typ, "w", encoding="utf-8") as f:
        f.write(f'#set page(width: {W / 10}mm, height: {H / 10}mm, margin: 0pt)\n'
                f'#image("{os.path.basename(svg_pad)}", width: 100%, height: 100%)\n')
    subprocess.run(["quarto", "typst", "compile", typ, png_pad, "--ppi", str(ppi)],
                   check=True, shell=os.name == "nt")
    os.remove(typ)


VARIANTEN = {
    "oranje": ("#F29400", "#E8112D"),
    "rood": ("#CC0000", "#1A1A1A"),
    "petrol": ("#0E7C86", "#E8112D"),
    "paars": ("#6B3FA0", "#F29400"),
}


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--kleur", default="oranje", choices=sorted(VARIANTEN))
    p.add_argument("--varianten", action="store_true")
    args = p.parse_args()

    if args.varianten:
        uit = os.path.join(HERE, "varianten")
        os.makedirs(uit, exist_ok=True)
        for naam, (accent, banner) in VARIANTEN.items():
            svg = os.path.join(uit, f"cover-{naam}.svg")
            open(svg, "w", encoding="utf-8").write(bouw(accent, banner))
            png(svg, os.path.join(uit, f"cover-{naam}.png"), ppi=90)
            os.remove(svg)   # enkel de proef-PNG's houden we bij
            print("varianten/cover-" + naam + ".png")
        return

    accent, banner = VARIANTEN[args.kleur]
    svg = os.path.join(HERE, "cover.svg")
    open(svg, "w", encoding="utf-8").write(bouw(accent, banner))
    png(svg, os.path.join(HERE, "cover.png"))
    print("cover.svg + cover.png geschreven (" + args.kleur + ")")


if __name__ == "__main__":
    main()
