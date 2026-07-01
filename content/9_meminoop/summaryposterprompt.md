# Posterprompt - H10: Geheugenmanagement en uitzonderingen

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Geheugenmanagement en uitzonderingen" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Twee soorten geheugen: de kleine, snelle stack en de grote, tragere heap
- Value types (int, bool, char, enums) staan met hun waarde rechtstreeks in de stack
- Reference types (objecten, arrays) staan in de heap, de stack bevat enkel een referentie (adres) ernaar
- De = operator kopieert bij reference types het adres, niet het object: twee variabelen kunnen naar hetzelfde object verwijzen
- De Garbage Collector ruimt automatisch objecten in de heap op waar geen referenties meer naar wijzen, GC.Collect() zelf aanroepen wordt afgeraden
- Een reference type variabele zonder object heeft de waarde null, en het benaderen ervan geeft een NullReferenceException
- Namespaces voorkomen naamconflicten tussen klassen met dezelfde naam, using haalt een namespace binnen
- Exception handling met try, catch en finally vangt fouten op zoals FormatException, NullReferenceException of IndexOutOfRangeException
- De plaats van try/catch bepaalt het gedrag: rond een hele methode stopt alles bij de eerste fout, rond een lusonderdeel laat de rest doorlopen

Vormgeving:
- Titel bovenaan: "Geheugenmanagement en uitzonderingen"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
