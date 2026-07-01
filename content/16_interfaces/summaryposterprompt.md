# Posterprompt - H17: Interfaces

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Interfaces" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een interface is een belofte: ze beschrijft enkel welke publieke methoden en properties een klasse moet hebben, niet hoe ze geïmplementeerd worden (geen code, geen instantievariabelen, geen constructors)
- Een interface start met een hoofdletter I (bv. ISuperHeld, IMinister, IComparable) en alle leden zijn automatisch publiek
- Een klasse implementeert een interface door ze na een dubbele punt te zetten en alle methoden en properties effectief in te vullen, anders compileert de code niet
- Een klasse kan van slechts 1 klasse overerven, maar wel meerdere interfaces tegelijk implementeren (bv. class Batman: Man, ISuperHeld, ICoureur)
- Interfaces lossen het probleem van compositie op: een Ceo kan naast zijn bestaande job ook IMinister implementeren zonder zijn klasse-structuur weg te gooien
- .NET gebruikt zelf interfaces zoals IComparable zodat Array.Sort en List.Sort weten hoe objecten (bv. Land) onderling vergeleken en gesorteerd moeten worden via CompareTo
- Met het is-keyword (of moderne pattern matching zoals "is IVloeker vloeker") kan je op een lijst van objecten controleren welke een bepaalde interface hebben en enkel die laten reageren
- Vuistregel: kies een abstracte klasse bij een "is een"-relatie met gedeelde code, kies een interface bij een "kan iets"-relatie tussen ongerelateerde klassen

Vormgeving:
- Titel bovenaan: "Interfaces"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
