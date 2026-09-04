"""Hulpmodule: bitmap-maskers omzetten naar gladde SVG-paden.

Marching squares op sub-pixelniveau + Douglas-Peucker vereenvoudiging.
Wordt gebruikt om de bril uit content/assets/cover.png te vectoriseren.
"""
import numpy as np

# case -> lijst van (van-edge, naar-edge); edges: 0=top 1=right 2=bottom 3=left
TABLE = {
    1:  [(3, 0)], 2:  [(0, 1)], 3:  [(3, 1)], 4:  [(1, 2)],
    5:  [(3, 0), (1, 2)], 6:  [(0, 2)], 7:  [(3, 2)], 8:  [(2, 3)],
    9:  [(2, 0)], 10: [(0, 1), (2, 3)], 11: [(2, 1)], 12: [(1, 3)],
    13: [(1, 0)], 14: [(0, 3)],
}


def _edge_point(edge, i, j, tl, tr, br, bl, level):
    """Lineair geinterpoleerd snijpunt op de gevraagde celrand."""
    def t(a, b):
        d = b - a
        return 0.5 if d == 0 else (level - a) / d
    if edge == 0:   # top: tl -> tr
        return (j + t(tl, tr), float(i))
    if edge == 1:   # right: tr -> br
        return (float(j + 1), i + t(tr, br))
    if edge == 2:   # bottom: bl -> br
        return (j + t(bl, br), float(i + 1))
    return (float(j), i + t(tl, bl))  # left: tl -> bl


def contours(field, level=0.5):
    """Gesloten contouren van een 2D float-veld op de gegeven iso-waarde."""
    f = np.pad(field.astype(np.float64), 1, constant_values=0.0)
    b = f >= level
    tl, tr = b[:-1, :-1], b[:-1, 1:]
    br, bl = b[1:, 1:], b[1:, :-1]
    case = tl * 1 + tr * 2 + br * 4 + bl * 8
    rows, cols = np.nonzero((case != 0) & (case != 15))

    segs = {}
    for i, j in zip(rows.tolist(), cols.tolist()):
        vtl, vtr = f[i, j], f[i, j + 1]
        vbr, vbl = f[i + 1, j + 1], f[i + 1, j]
        for a, z in TABLE[int(case[i, j])]:
            p = _edge_point(a, i, j, vtl, vtr, vbr, vbl, level)
            q = _edge_point(z, i, j, vtl, vtr, vbr, vbl, level)
            segs.setdefault(_key(p), []).append((p, q))

    loops = []
    while segs:
        k = next(iter(segs))
        p, q = segs[k].pop()
        if not segs[k]:
            del segs[k]
        loop = [p, q]
        while True:
            nk = _key(q)
            if nk not in segs:
                break
            p2, q2 = segs[nk].pop()
            if not segs[nk]:
                del segs[nk]
            q = q2
            loop.append(q)
            if _key(q) == k:
                break
        if len(loop) > 3:
            # coordinaten terug naar het originele (niet-gepadde) raster
            loops.append([(x - 1.0, y - 1.0) for x, y in loop])
    return loops


def _key(p):
    return (round(p[0], 5), round(p[1], 5))


def simplify(points, eps):
    """Douglas-Peucker op een gesloten lus."""
    pts = points[:-1] if points[0] == points[-1] else points[:]
    if len(pts) < 4:
        return points
    # start vanuit twee ver uit elkaar liggende punten zodat de lus opengeknipt kan worden
    arr = np.asarray(pts)
    i0 = int(np.argmin(arr[:, 0] + arr[:, 1]))
    arr = np.roll(arr, -i0, axis=0)
    i1 = int(np.argmax(((arr - arr[0]) ** 2).sum(axis=1)))
    a = _dp(arr[: i1 + 1], eps)
    b = _dp(arr[i1:], eps)
    out = list(map(tuple, a)) + list(map(tuple, b[1:]))
    out.append(out[0])
    return out


def _dp(pts, eps):
    if len(pts) < 3:
        return pts
    start, end = pts[0], pts[-1]
    d = end - start
    n = np.hypot(*d)
    if n == 0:
        dist = np.hypot(*(pts - start).T)
    else:
        dist = np.abs(np.cross(d, pts - start)) / n
    idx = int(np.argmax(dist))
    if dist[idx] > eps:
        left = _dp(pts[: idx + 1], eps)
        right = _dp(pts[idx:], eps)
        return np.vstack([left[:-1], right])
    return np.vstack([start, end])


def to_path(loops, transform=lambda x, y: (x, y), decimals=2):
    """Lussen -> SVG path-data (even-odd)."""
    parts = []
    for loop in loops:
        pts = [transform(x, y) for x, y in loop]
        d = "M" + f"{pts[0][0]:.{decimals}f},{pts[0][1]:.{decimals}f}"
        d += "".join(f"L{x:.{decimals}f},{y:.{decimals}f}" for x, y in pts[1:-1])
        parts.append(d + "Z")
    return "".join(parts)
