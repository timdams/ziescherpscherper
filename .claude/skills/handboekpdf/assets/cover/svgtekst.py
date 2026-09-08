"""Tekst omzetten naar SVG-paden.

De cover wordt in de PDF gezet als SVG. Zou de tekst als <text> blijven staan,
dan hangt het resultaat af van de fonts op de machine die rendert (de GitHub
Action heeft geen Arial). Daarom zetten we alle letters om naar outlines.
"""
import os
from fontTools.misc.transform import Transform
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONTS = os.path.join(os.environ.get("WINDIR", r"C:\Windows"), "Fonts")
_cache = {}


class Font:
    def __init__(self, bestand):
        self.tt = TTFont(os.path.join(FONTS, bestand))
        self.glyphs = self.tt.getGlyphSet()
        self.cmap = self.tt.getBestCmap()
        self.upem = self.tt["head"].unitsPerEm
        self.hmtx = self.tt["hmtx"]

    def _naam(self, ch):
        naam = self.cmap.get(ord(ch))
        if naam is None:
            raise KeyError(f"font mist glyph voor {ch!r}")
        return naam

    def breedte(self, tekst, grootte, spatiering=0.0):
        """Adviesbreedte in dezelfde eenheid als `grootte`."""
        w = sum(self.hmtx[self._naam(c)][0] for c in tekst) / self.upem
        return (w + spatiering * max(len(tekst) - 1, 0)) * grootte

    def pad(self, tekst, grootte, x, y, spatiering=0.0, anker="start"):
        """SVG path-data voor `tekst`, met (x, y) op de basislijn."""
        breedte = self.breedte(tekst, grootte, spatiering)
        if anker == "middle":
            x -= breedte / 2
        elif anker == "end":
            x -= breedte
        s = grootte / self.upem
        stukken = []
        pen_x = x
        for ch in tekst:
            naam = self._naam(ch)
            pen = SVGPathPen(self.glyphs, ntos=lambda v: f"{v:.2f}")
            self.glyphs[naam].draw(TransformPen(pen, Transform(s, 0, 0, -s, pen_x, y)))
            d = pen.getCommands()
            if d:
                stukken.append(d)
            pen_x += self.hmtx[naam][0] * s + spatiering * grootte
        return "".join(stukken)


def font(bestand):
    if bestand not in _cache:
        _cache[bestand] = Font(bestand)
    return _cache[bestand]
