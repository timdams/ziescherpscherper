# Snijdt het 2x2-blad met icoontjes in vier losse png's voor de kaarten op de
# landingspagina (index.qmd).
#
# Het blad zelf is gegenereerd met de imagen-skill (GPT-5.4 Image 2, 1:1) en
# blijft hier staan als bron; de prompt staat in prompt.txt. Per icoontje:
# kwadrant uitsnijden, de achtergrond doorzichtig maken (flood fill vanaf de
# hoeken, zodat het wit binnen de blaadjes blijft), strak rond het icoontje
# snijden en met gelijke marge in een vierkant zetten.
#
# Gebruik:  python content/assets/landing/snij_kaarten.py
import glob
import os

from PIL import Image, ImageDraw

HIER = os.path.dirname(os.path.abspath(__file__))

NAMEN = ["handboek", "pdf", "oefeningen", "slides"]  # linksboven, rechtsboven, linksonder, rechtsonder
ZIJDE = 160   # de kaarten tonen ze op 62 px, dit is ruim genoeg voor een scherm met hoge dpi
MARGE = 16    # marge rond het icoontje, in pixels van het blad

blad_pad = sorted(glob.glob(os.path.join(HIER, "kaarten-blad-*.png")))[-1]
blad = Image.open(blad_pad).convert("RGBA")
hw, hh = blad.width // 2, blad.height // 2

for i, naam in enumerate(NAMEN):
    x, y = (i % 2) * hw, (i // 2) * hh
    tegel = blad.crop((x, y, x + hw, y + hh))

    for hoek in [(1, 1), (tegel.width - 2, 1), (1, tegel.height - 2), (tegel.width - 2, tegel.height - 2)]:
        ImageDraw.floodfill(tegel, hoek, (0, 0, 0, 0), thresh=30)

    icoon = tegel.crop(tegel.getbbox())

    zijde = max(icoon.size) + 2 * MARGE
    vlak = Image.new("RGBA", (zijde, zijde), (0, 0, 0, 0))
    vlak.paste(icoon, ((zijde - icoon.width) // 2, (zijde - icoon.height) // 2), icoon)
    vlak = vlak.resize((ZIJDE, ZIJDE), Image.LANCZOS)

    uit = os.path.join(HIER, "kaart-%s.png" % naam)
    vlak.save(uit, optimize=True)
    print(naam, "->", os.path.basename(uit), os.path.getsize(uit) // 1024, "kB")
