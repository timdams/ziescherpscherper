// De tekening en de code komen letterlijk uit content/2_tekst/7_unicode.md.
export const ART = [
  "___________________   ",
  "\\__    ___/\\______ \\  ",
  "  |    |    |    |  \\ ",
  "  |    |    |    `   \\",
  "  |____|   /_______  /",
  "                   \\/ ",
];

export const OPEN_AT = 'string myname = @"';
export const OPEN_RAW = 'string myname = """';
export const SLUIT_RAW = '    """;';
export const WRITELINE = "Console.WriteLine(myname);";

export const inspring = (regel: string, spaties: number) => " ".repeat(spaties) + regel;

/** Rij en kolom van elke backslash in de tekening. */
export const BACKSLASHES: { rij: number; kol: number }[] = [];
ART.forEach((regel, rij) => {
  for (let kol = 0; kol < regel.length; kol++) {
    if (regel[kol] === "\\") BACKSLASHES.push({ rij, kol });
  }
});
