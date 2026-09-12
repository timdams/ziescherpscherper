// System.Random met een vaste seed: het subtractieve algoritme van Knuth dat .NET voor een
// geseede generator gebruikt. Nagekeken tegen .NET 10 (dotnet fsi) op 12 september 2026:
//   new Random(666).Next(0, 10) -> 6, 2, 2, 7, 8, 5, 3, 5, 3, 8, ...
//   new Random(42).Next(0, 10)  -> 6, 1, 1, 5, 1, 2, 7, 5, 1, 7, ...
// De getallen in de reel zijn dus echt.

const MBIG = 2147483647;
const MSEED = 161803398;

export const maakRandom = (seed: number) => {
  const s: number[] = [];
  for (let i = 0; i < 56; i++) s.push(0);
  let mj = MSEED - Math.abs(seed);
  s[55] = mj;
  let mk = 1;
  for (let i = 1; i < 55; i++) {
    const ii = (21 * i) % 55;
    s[ii] = mk;
    mk = mj - mk;
    if (mk < 0) mk += MBIG;
    mj = s[ii];
  }
  for (let k = 1; k < 5; k++) {
    for (let i = 1; i < 56; i++) {
      s[i] -= s[1 + ((i + 30) % 55)];
      if (s[i] < 0) s[i] += MBIG;
    }
  }
  let inext = 0;
  let inextp = 21;
  const sample = () => {
    if (++inext >= 56) inext = 1;
    if (++inextp >= 56) inextp = 1;
    let v = s[inext] - s[inextp];
    if (v === MBIG) v--;
    if (v < 0) v += MBIG;
    s[inext] = v;
    return v;
  };
  /** Zoals Next(min, max): min inclusief, max exclusief. */
  return (min: number, max: number) => Math.floor(sample() * (1 / MBIG) * (max - min)) + min;
};

export const reeks = (seed: number, aantal: number) => {
  const next = maakRandom(seed);
  const getallen: number[] = [];
  for (let i = 0; i < aantal; i++) getallen.push(next(0, 10));
  return getallen;
};

export const REEKS_666 = reeks(666, 32);
export const REEKS_42 = reeks(42, 8);
