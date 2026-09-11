# H1: De eerste stappen

Bronnen: `oefeningen/1_intro/A_Practica.md`, `oefeningen/_coach/1_intro.md`, `content/0_intro/`
(alle bestanden uit `_quarto.yml`), de afbeeldingen in de opgaven, het begin van
`oefeningen/2_csharpbasics/A_practica.md`.

Dit is het voorbeeldrapport. Alles hieronder is op 2026-09-11 doorgevoerd, zie onderaan.

## 1. Fouten die sowieso weg moeten

- **Rommel zin: de oplossing is fout.** Het antwoord op de vraag naar de auto komt in `favBoek`
  terecht, het boek in `favAuto`. Het programma toont "Je eet graag Het oneindige verhaal" in
  plaats van "mazda" (geverifieerd met dotnet). Net de valkuil die de coach-data zelf beschrijft.
- **Woordenslinger:** de opgave toont `geelroodblauw`, de afbeelding en de oplossing
  `geelroodblauwgroen`. De opgave spreekt ook van "twee zinnen" in plaats van twee lijnen.
- **Tekening:** het schema is 5 blokjes breed (1-3-1), de oplossing en de screenshot 7 spaties
  (2-3-2). Wie het schema volgt, krijgt iets anders dan de oplossing.
- **Visitekaart:** een losse `"` na "visitekaartje" in de voorbeelduitvoer. Het voorbeeld heeft
  twee witregels die de oplossing niet toont, en een lege lijn tonen is nergens uitgelegd.
  "Toon de vragen gevolgd door de antwoorden" klopt niet: je toont labels.
- **Regenboog Ticket:** de oplossing zet `BackgroundColor = ConsoleColor.Black` hard, terwijl het
  boek in "Kleur resetten" net uitlegt waarom je dat niet doet. De opgave zegt niet dat de
  tekstregels de gewone achtergrond hebben.
- **Muziek:** op Mac en Linux hoor je niet "gewoon niets": `Console.Beep(freq, duur)` geeft daar
  een `PlatformNotSupportedException`.
- Kleinere dingen: typfout "vergelijkt me de modeloplossing", drie losse callouts bovenaan in plaats
  van één `.vooraf`-blok.

## 2. Wat sterker kan

- **Volgorde:** de sprong van Wie ben ik (enkel `WriteLine`) naar Visitekaart (vier keer inlezen,
  variabelen, `Write` én `WriteLine`) is de grootste van het hoofdstuk. Fake GPT is makkelijker en
  hoort ertussen.
- **Fake GPT:** een deel 2 waarin hij de vraag herhaalt. Eén waarde inlezen en terug tonen is de
  brug naar Visitekaart.
- **Visitekaart:** de oplossing mengt `Write("Naam: ")` met `WriteLine($"...")`. Laat het kaartje
  twee keer maken, eerst met `Write`/`WriteLine`, dan met `$`.
- **Wie ben ik:** daarna het programma bewust stukmaken op drie plekken (puntkomma,
  `Writeline`, aanhalingsteken) en de Error List lezen. Zo wordt "Fouten oplossen" ook geoefend.
- **Rommel zin:** de foute oplossing omdraaien tot een Steven-opdracht: "zijn code compileert,
  maar de zin klopt niet. Waarom?"
- **Tekening:** uitleggen waarom twee spaties per blokje (een teken is ongeveer twee keer zo hoog
  als breed), en afsluiten met een vlag en een eigen tekening. Eigenlijk een Essential-kandidaat.
- **Regenboog Ticket** gebruikt als Final Essentials te weinig leerstof: geen `$`, geen kleurwissel
  midden in een lijn. Voorstel: label in de gewone kleur, waarde in kleur, "12 euro" als prijs, en
  een callout "Les".
- **Woordenslinger:** optionele Stroop-test (kleurwoorden in de verkeerde kleur).

## 3. Wat weg kan (of verhuist)

- **Muziek:** achter het Ticket, als bonus.
- Kleur weegt zwaar (4 van de 9 oefeningen). Liever verschuiven naar het moeilijke deel
  (variabelen, `Write` tegenover `WriteLine`, aanhalingstekens tegenover variabele, `$`) dan
  schrappen.

## 4. Gaten: kansen voor nieuwe oefeningen

1. **Voorspel de uitvoer** (Essential): `Write`/`WriteLine`, spaties binnen en buiten
   aanhalingstekens, `"naam"` tegenover `naam`, vergeten `$`. Eerst op papier, dan uitvoeren.
2. **Stevens begroeting** (Essential): fouten die de compiler vindt én fouten die hij niet vindt
   (`$` vergeten, `ResetColor` vergeten, spatie buiten de aanhalingstekens).
3. **Frituur in volgorde**: gegeven lijnen in de juiste volgorde zetten, met één indringer.
4. **Kleurige chat**: wat de gebruiker typt, verschijnt in de kleur die op dat moment ingesteld is.

## 5. Voorgestelde volgorde

Wie ben ik → Fake GPT → Visitekaart → Rommel zin → Frituur in volgorde → Voorspel de uitvoer →
Stevens begroeting → Stad kleuren → Kleurige chat → Woordenslinger → Tekening → Regenboog Ticket →
Muziek (bonus)

## 6. Nevenvondsten

- `content/0_intro/zieverder.md` zei nog "met `+` plak je stukken tekst aan elkaar", terwijl
  `3_console.md` enkel `$` leert.
- De coach-data moet mee met elke titelwijziging, anders krijgt een oefening geen Coach-knop.

---

## Doorgevoerd (2026-09-11)

- Alle punten hierboven. `oefeningen/1_intro/A_Practica.md` telt nu 13 oefeningen in de volgorde
  van sectie 5. Tekening is Essential geworden.
- Tekening: het schema is een tekstschema geworden dat overeenkomt met de screenshot. De afbeelding
  `kleur.jpg` wordt niet meer gebruikt.
- Regenboog Ticket: de screenshot `finaloef.png` is vervangen door een `.console .kleur`-blok.
- `oefeningen/oefeningen.scss`: nieuwe variant `.console.kleur` voor gekleurde voorbeelduitvoer.
- `oefeningen/_coach/1_intro.md` herschreven voor de 13 oefeningen.
- `content/0_intro/zieverder.md`: de regel over `+` gaat nu over `$`.
- Gecontroleerd: alle code met dotnet 10, `quarto render oefeningen/`, slot-script en coach-script
  op een kopie van de build, screenshots van de gekleurde blokken.
