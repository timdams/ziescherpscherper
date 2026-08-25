# Posterprompt - H3: Tekst gebruiken in code

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Tekst gebruiken in code" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een char bevat één enkel teken tussen apostrofs (bv. char eenLetter = 'X';), een string gebruikt aanhalingstekens en bestaat uit 0, 1 of meerdere chars
- Intern wordt elk teken bewaard als een UNICODE-getal (16 bit); daarom geeft letter1 + letter2 bij twee chars zoals 'A' (65) en 'B' (66) het getal 131 en niet "AB"
- Escape characters met een backslash geven een teken een speciale betekenis: \', \", \\, \n (nieuwe lijn), \t (tab), \uxxxx (UNICODE-teken via hexadecimale code)
- Het verbatim-teken @ voor een string-literal (bv. @"C:\Temp\Myfile.txt") laat escape characters negeren, handig voor bestandspaden of multiline tekst
- String interpolatie met $"..." en accolades (bv. $"Ik ben {naam} en ik ben {leeftijd} jaar.") is de standaardmanier om variabelen en berekeningen in tekst te plaatsen
- De +-operator plakt strings aan elkaar en is vooral nuttig om een lange tekst over meerdere codelijnen te splitsen; de volgorde bepaalt het resultaat: "1"+1+1 geeft "111", maar 1+1+"1" geeft "21"
- Formatteren binnen interpolatie met een dubbelpunt, bijvoorbeeld {number:F2} voor 2 cijfers na de komma of {number:C} voor een geldbedrag
- UNICODE volgt de oudere ASCII-standaard op (128 tekens, 7 bit) en telt meer dan 1 miljoen mogelijke tekens; een UNICODE-teken tonen kan via copy/paste of via de \u-notatie
- De Environment-bibliotheek geeft info over de computer waarop het programma draait, zoals Environment.MachineName, Environment.ProcessorCount en Environment.UserName

Vormgeving:
- Titel bovenaan: "Tekst gebruiken in code"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
