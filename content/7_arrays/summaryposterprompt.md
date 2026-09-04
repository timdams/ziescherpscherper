# Posterprompt - H8: Arrays

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Arrays" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een array is een verzameling waarden van hetzelfde datatype, benaderbaar via 1 variabele en een index (bv. int[] regen = {34, 45, 0, 34, 12, 0, 23};)
- De index van een C#-array start altijd bij 0: een array met lengte 5 heeft indices 0 tot en met 4, en index 5 opvragen geeft een IndexOutOfRangeException
- Arrays zijn reference types: myArray2 = myArray1 kopieert enkel het geheugenadres, niet de inhoud, dus beide variabelen wijzen naar dezelfde array in het geheugen
- Om een array echt te kopiëren moet je elk element individueel overzetten met een loop, of Array.Copy gebruiken
- De System.Array-bibliotheek biedt kant-en-klare methoden zoals Array.Sort, Array.Reverse, Array.IndexOf en Array.BinarySearch (dat laatste enkel op gesorteerde arrays)
- Zelf zoeken met een loop (zoek-en-stop: stoppen zodra het element gevonden is) werkt ook op een ongesorteerde array; -1 is de gangbare afspraak voor "niet gevonden"
- Terugkerende loop-patronen: een som of teller die je vóór de loop aanmaakt, en het grootste element zoeken door het eerste element als startwaarde te nemen
- Meerdimensionale arrays (bv. int[,] regen = new int[4,7]) stellen een rechthoekig rooster voor waarin ieder vakje hetzelfde betekent; .GetLength(0) geeft het aantal rijen, .GetLength(1) het aantal kolommen en .Rank het aantal dimensies
- Een 2D-array overloop je met twee geneste for-loops: de buitenste over de rijen, de binnenste over de kolommen
- Betekent elke kolom iets anders (titel, auteur, ID), dan neem je geen 2D-array maar later een klasse; jagged arrays (double[][] tickets, rijen met elk een eigen lengte, geïndexeerd met tickets[0][1]) moet je vooral kunnen herkennen
- Een array meegeven aan een methode gebeurt by reference: aanpassingen aan de array in de methode veranderen ook de originele array buiten de methode
- Met het keyword params voor een array-parameter (bv. static int Som(params int[] getallen)) mag je de methode aanroepen met zoveel losse waarden als je wil; er is maar 1 params-parameter en die staat altijd achteraan

Vormgeving:
- Titel bovenaan: "Arrays"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
