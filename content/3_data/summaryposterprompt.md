# Posterprompt - H4: Werken met data

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Werken met data" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Casting: bij narrowing (bv. double naar int) moet je expliciet het nieuwe type tussen haakjes zetten, zoals `(int)3.5`, anders geeft de compiler een fout
- Widening (bv. int naar double) gebeurt automatisch zonder cast, omdat er geen dataverlies is
- Parsing zet een string om naar een ander type met `.Parse()`, bijvoorbeeld `int.Parse("-105")`, vaak gebruikt na `Console.ReadLine()` om gebruikersinvoer om te zetten naar een getal
- De Convert-bibliotheek (bv. `Convert.ToInt32()`, `Convert.ToDouble()`) is een derde manier om te converteren, handig maar een "zwarte doos": je ziet niet of er casting of parsing achter zit
- De Math-bibliotheek biedt methoden zoals `Math.Pow()`, `Math.Sqrt()`, `Math.Round()` en de constante `Math.PI`
- Afronden kent addertjes: casting kapt gewoon af richting nul, terwijl `Math.Round()` standaard "bankers rounding" gebruikt (afronden naar het dichtstbijzijnde even getal), tenzij je `MidpointRounding.AwayFromZero` meegeeft
- Met de Random-klasse genereer je willekeurige getallen via `Next()` en `NextDouble()`, en maak je best maar één generatorobject aan in je hele programma
- Debuggen met breakpoints en stap-voor-stap "steppen" (step-over) helpt om logische fouten op te sporen die de compiler niet ziet
- Bij het gebruik van AI is de "verboden prompt" (gewoon de volledige oplossing laten schrijven) uit den boze; gebruik in de plaats prompts zoals de zoek-de-fout-prompt of de vergelijkings-prompt om zelf te blijven leren

Vormgeving:
- Titel bovenaan: "Werken met data"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
