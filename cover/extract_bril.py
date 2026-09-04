"""Haalt de bril (montuur + de letters C en #) als vectorpaden uit een oude cover.

De brilvorm is in alle edities dezelfde, enkel de kleur verschilt. We tracen de
scherpste bron die we hebben en bewaren het resultaat als SVG-pad in bril.json,
in een genormaliseerd assenstelsel (breedte = 1000).
"""
import json
import os
import numpy as np
from PIL import Image, ImageFilter
import bitmaptrace as tr

HERE = os.path.dirname(os.path.abspath(__file__))
BRON = os.path.join(HERE, "..", "content", "assets", "7_overerving", "frontcoverziescherper.jpg")
GRIJS = (230, 230, 230)
MONTUUR = (68, 160, 53)
ZWART = (0, 0, 0)
BLUR = 0.8      # jpeg-ruis en trapjes wegwerken
EPS = 0.3       # Douglas-Peucker tolerantie in bronpixels


def gewichten(rgb, palet):
    """Per pixel het aandeel van elke palet-kleur, sub-pixel nauwkeurig."""
    d = ((rgb[:, :, None, :] - palet[None, None, :, :]) ** 2).sum(-1)
    idx = np.argsort(d, axis=-1)
    i0, i1 = idx[..., 0], idx[..., 1]
    c0, c1 = palet[i0], palet[i1]
    v = c1 - c0
    denom = (v * v).sum(-1)
    t = np.clip(((rgb - c0) * v).sum(-1) / np.maximum(denom, 1e-9), 0.0, 1.0)

    def aandeel(k):
        return np.where(i0 == k, 1.0 - t, np.where(i1 == k, t, 0.0))

    return aandeel(1), aandeel(2)


def main():
    palet = np.array([GRIJS, MONTUUR, ZWART], float)
    rgb = np.asarray(Image.open(BRON).convert("RGB"), dtype=float)
    kleur, zwart = gewichten(rgb, palet)

    # de onderste kleurband wegknippen: eerste rij die vrijwel volledig gekleurd is
    vol = (kleur > 0.5).mean(axis=1)
    split = int(np.argmax(vol > 0.95))
    kleur, zwart = kleur[:split], zwart[:split]

    ys, xs = np.nonzero(kleur > 0.5)
    marge = 4
    x0, y0 = max(0, xs.min() - marge), max(0, ys.min() - marge)
    x1 = min(kleur.shape[1], xs.max() + 1 + marge)
    y1 = min(kleur.shape[0], ys.max() + 1 + marge)
    kleur, zwart = kleur[y0:y1, x0:x1], zwart[y0:y1, x0:x1]

    schaal = 1000.0 / (x1 - x0)
    hoogte = (y1 - y0) * schaal

    def pad(veld):
        img = Image.fromarray((np.clip(veld, 0, 1) * 255).astype(np.uint8))
        veld = np.asarray(img.filter(ImageFilter.GaussianBlur(BLUR)), float) / 255.0
        lussen = [tr.simplify(l, EPS) for l in tr.contours(veld)]
        return tr.to_path(lussen, lambda x, y: (x * schaal, y * schaal))

    data = {
        "breedte": 1000.0,
        "hoogte": round(hoogte, 3),
        "montuur": pad(kleur),
        "letters": pad(zwart),
    }
    with open(os.path.join(HERE, "bril.json"), "w", encoding="utf-8") as f:
        json.dump(data, f)
    print("bril.json ok, verhouding b/h:", round(1000 / hoogte, 3))


if __name__ == "__main__":
    main()
