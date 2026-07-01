# Posterprompt - H12: Arrays en klassen

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Arrays en klassen" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een array van objecten (bv. Student[] mijnKlas = new Student[20];) bevat na aanmaak enkel referenties die nog null zijn: je moet elk element apart met new aanmaken voor je instantievariabelen kan invullen
- Een individueel object in de array benader je met index en dot-operator (bv. mijnKlas[3].Naam = "..."), en zolang minstens één referentie naar een object bestaat, ruimt de garbage collector het niet op
- De foreach-loop doorloopt alle elementen zonder teller, maar de iteration variabele is read-only: je mag ze niet herprogrammeren met een nieuw object, wel de instantievariabelen van het onderliggend object aanpassen
- Een collectie wijzigen (toevoegen of verwijderen) tijdens een foreach erover geeft een InvalidOperationException
- List<T> is een generieke collectie die net als een array werkt, maar automatisch meegroeit en met Count werkt in plaats van Length
- List<T> biedt handige methoden zoals Add(), Insert(), RemoveAt(), IndexOf() en Sort(), al vergelijkt IndexOf objecten op basis van referentie, niet op inhoud
- Een Dictionary<TKey, TValue> slaat elementen op als key-value paar en laat razendsnel opzoeken toe via een unieke sleutel in plaats van via positie
- In een Dictionary lees je de sleutel en waarde in een foreach uit via .Key en .Value

Vormgeving:
- Titel bovenaan: "Arrays en klassen"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
