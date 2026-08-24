// H1 - fietspomp: hetzelfde algoritme, andere volgorde, ander resultaat
const { createCanvas, C } = require('./excal');
const W = 1700, H = 940;
const c = createCanvas(W, H);

const CW = 320, CH = 270;
const XS = [80, 500, 920];
const RES_X = 1470;

// --- bouwstenen ---------------------------------------------------------

function badge(cx, cy, n) {
  c.circle(cx, cy, 46, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5, fillWeight: 1.4,
    stroke: C.RED, strokeWidth: 2.4, roughness: 1.4 });
  c.txt(cx, cy + 11, String(n), 32, C.RED_DARK, 700);
}

// ventiel: vx,vy = voet van het ventiel op de velg
function ventiel(vx, vy, dopOp) {
  c.path(`M ${vx - 50} ${vy + 34} Q ${vx} ${vy + 6} ${vx + 50} ${vy + 34}`, { strokeWidth: 3.2, roughness: 1.3 });
  c.rect(vx - 10, vy - 30, 20, 40, { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.2, roughness: 1.2 });
  if (dopOp) c.rect(vx - 16, vy - 52, 32, 24, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5,
    fillWeight: 1.4, stroke: C.RED, strokeWidth: 2.2, roughness: 1.3 });
}

// pomp: px,py = linkerkant van de voet
function pomp(px, py, ingedrukt) {
  const gap = ingedrukt ? 10 : 40;
  c.line(px - 14, py, px + 60, py, { strokeWidth: 3, roughness: 1.4 });
  c.rect(px, py - 70, 46, 70, { fill: C.WHITE, fillStyle: 'solid', strokeWidth: 2.4, roughness: 1.2 });
  c.line(px + 23, py - 70, px + 23, py - 70 - gap, { strokeWidth: 2.6, roughness: 1.2 });
  c.rect(px - 8, py - 70 - gap - 16, 62, 16, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5,
    fillWeight: 1.4, stroke: C.RED, strokeWidth: 2.2, roughness: 1.2 });
}

// los = de slang raakt niet op het ventiel (dop zit er nog op)
function slang(px, py, vx, vy, los) {
  if (los) {
    c.path(`M ${px + 46} ${py - 24} Q ${px + 88} ${py + 10} ${vx - 44} ${vy - 4}`, { strokeWidth: 3, roughness: 1.3 });
  } else {
    c.path(`M ${px + 46} ${py - 24} Q ${px + 96} ${py - 6} ${vx - 9} ${vy - 16}`, { strokeWidth: 3, roughness: 1.3 });
  }
}

// icoon 1: dop van het ventiel halen
function icoonDop(icx, icy) {
  ventiel(icx - 10, icy + 22, false);
  c.rect(icx + 42, icy - 46, 32, 24, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5,
    fillWeight: 1.4, stroke: C.RED, strokeWidth: 2.2, roughness: 1.3 });
  c.carrow(icx - 2, icy - 18, icx + 20, icy - 58, icx + 36, icy - 40, { strokeWidth: 2.4, head: 13, roughness: 1.3 });
}

// icoon 2: pomp op het ventiel plaatsen
function icoonPomp(icx, icy, dopOp) {
  const vx = icx + 62, vy = icy + 22;
  ventiel(vx, vy, dopOp);
  pomp(icx - 85, icy + 40, false);
  slang(icx - 85, icy + 40, vx, vy, dopOp);
  if (dopOp) { // botsmarkje: de pomp raakt er niet op
    c.line(vx - 36, vy - 16, vx - 26, vy - 26, { strokeWidth: 2.4, roughness: 1.4, stroke: C.RED });
    c.line(vx - 34, vy + 6, vx - 24, vy + 12, { strokeWidth: 2.4, roughness: 1.4, stroke: C.RED });
  }
}

// icoon 3: pompen
function icoonPompen(icx, icy, dopOp) {
  const vx = icx + 62, vy = icy + 22, px = icx - 85, py = icy + 40;
  ventiel(vx, vy, dopOp);
  pomp(px, py, true);
  slang(px, py, vx, vy, dopOp);
  c.arrow(px + 23, icy - 94, px + 23, icy - 66, { strokeWidth: 2.6, head: 14, stroke: C.RED_DARK, roughness: 1.2 });
  c.line(px - 16, icy - 78, px - 4, icy - 68, { strokeWidth: 2.2, roughness: 1.4, stroke: C.RED_DARK });
  c.line(px + 62, icy - 78, px + 50, icy - 68, { strokeWidth: 2.2, roughness: 1.4, stroke: C.RED_DARK });
  if (dopOp) { // de lucht raakt nergens binnen
    c.line(vx - 40, vy - 8, vx - 26, vy - 22, { strokeWidth: 2.4, roughness: 1.4, stroke: C.RED });
    c.line(vx - 40, vy - 2, vx - 24, vy + 6, { strokeWidth: 2.4, roughness: 1.4, stroke: C.RED });
  }
}

function kaart(x, y, n, regels, tekenIcoon) {
  c.rect(x, y, CW, CH, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.4, bowing: 1.1 });
  badge(x + 36, y + 36, n);
  tekenIcoon(x + 165, y + 120);
  c.lines(x + CW / 2, y + 215, regels, 30, C.GRAY, 600, 'middle', 1.1);
}

function wiel(cx, cy, plat) {
  c.line(cx - 118, cy + 90, cx + 118, cy + 90, { strokeWidth: 2.4, roughness: 1.6 });
  if (!plat) {
    c.circle(cx, cy, 168, { fill: 'none', stroke: C.GRAY, strokeWidth: 4, roughness: 1.4 });
    c.circle(cx, cy, 126, { fill: 'none', stroke: C.GRAY, strokeWidth: 2, roughness: 1.4 });
  } else {
    c.ellipse(cx, cy + 38, 212, 100, { fill: 'none', stroke: C.GRAY, strokeWidth: 4, roughness: 1.5 });
    c.ellipse(cx, cy + 36, 158, 62, { fill: 'none', stroke: C.GRAY, strokeWidth: 2, roughness: 1.5 });
  }
  c.circle(cx, cy + (plat ? 36 : 0), 24, { fill: C.GRAY, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2 });
}

function vink(bx, by) {
  c.circle(bx, by, 60, { fill: C.WHITE, fillStyle: 'solid', stroke: C.GRAY, strokeWidth: 2.4, roughness: 1.4 });
  c.line(bx - 14, by + 1, bx - 4, by + 12, { strokeWidth: 4, roughness: 1.1 });
  c.line(bx - 4, by + 12, bx + 14, by - 13, { strokeWidth: 4, roughness: 1.1 });
}

function kruis(bx, by) {
  c.circle(bx, by, 60, { fill: C.RED_LIGHT, fillStyle: 'hachure', hachureGap: 5, fillWeight: 1.4,
    stroke: C.RED, strokeWidth: 2.4, roughness: 1.4 });
  c.line(bx - 13, by - 13, bx + 13, by + 13, { strokeWidth: 4.5, roughness: 1.1, stroke: C.RED });
  c.line(bx + 13, by - 13, bx - 13, by + 13, { strokeWidth: 4.5, roughness: 1.1, stroke: C.RED });
}

function rij(y, label, labelKleur, kaarten, plat, resultaat) {
  c.txt(80, y - 35, label, 34, labelKleur, 700, 'start');
  kaarten.forEach((k, i) => kaart(XS[i], y, k.n, k.regels, k.icoon));
  const my = y + 135;
  c.arrow(XS[0] + CW + 10, my, XS[1] - 10, my, { strokeWidth: 2.8, head: 18 });
  c.arrow(XS[1] + CW + 10, my, XS[2] - 10, my, { strokeWidth: 2.8, head: 18 });
  c.arrow(XS[2] + CW + 10, my, RES_X - 140, my, { strokeWidth: 2.8, head: 18 });
  wiel(RES_X, my, plat);
  (plat ? kruis : vink)(RES_X + 125, my - 70);
  c.lines(RES_X, my + 150, resultaat, 32, plat ? C.RED_DARK : C.GRAY, 700, 'middle', 1.1);
}

// --- rij 1: juiste volgorde --------------------------------------------
rij(140, 'de juiste volgorde', C.GRAY, [
  { n: 1, regels: ['Haal dop van', 'het ventiel'], icoon: (x, y) => icoonDop(x, y) },
  { n: 2, regels: ['Plaats pomp', 'op ventiel'], icoon: (x, y) => icoonPomp(x, y, false) },
  { n: 3, regels: ['Begin te', 'pompen'], icoon: (x, y) => icoonPompen(x, y, false) }
], false, ['band vol']);

// --- rij 2: dezelfde stappen, andere volgorde ---------------------------
rij(560, 'dezelfde stappen, andere volgorde', C.RED_DARK, [
  { n: 2, regels: ['Plaats pomp', 'op ventiel'], icoon: (x, y) => icoonPomp(x, y, true) },
  { n: 3, regels: ['Begin te', 'pompen'], icoon: (x, y) => icoonPompen(x, y, true) },
  { n: 1, regels: ['Haal dop van', 'het ventiel'], icoon: (x, y) => icoonDop(x, y) }
], true, ['band blijft plat', 'de dop zat er nog op']);

c.save(__dirname, 'fietspomp', '');
