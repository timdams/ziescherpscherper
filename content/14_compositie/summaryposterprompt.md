# Posterprompt - H15: Compositie en aggregatie

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Compositie en aggregatie" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Compositie en aggregatie zijn associaties: ze beschrijven een "heeft een"-relatie tussen twee objecten, tegenover de "is een"-relatie van overerving
- Bij compositie kan het interne object niet bestaan zonder het omliggende object (een kamer verdwijnt met het huis), bij aggregatie kunnen beide objecten los van elkaar bestaan (een motor overleeft de auto)
- Een "heeft meerdere"-relatie werk je uit met een array of een List als instantievariabele, bijvoorbeeld een Boek met Pagina[] AllePaginas
- Een interne lijst of array nooit met een publieke setter naar buiten geven: gebruik {get; private set;} en een eigen InsertPagina-methode zodat de inhoud beschermd blijft
- Het this keyword geeft de referentie naar het huidige object terug en werkt enkel in instance-context, nooit in een static methode
- this lost naamconflicten op tussen een instantievariabele of property en een lokale variabele of parameter met dezelfde naam
- Met this kan een object zichzelf als actuele parameter meegeven aan een externe methode, zoals Management.MagPromoveren(this)
- Compositie en aggregatie werken via referenties: het interne object staat apart op de heap en niet monolithisch in het omliggende object, vandaar het risico op een NullReferenceException als je niet op null controleert
- Favor composition over inheritance: bij twijfel over een "is een"-relatie kies je beter voor een "heeft een"-relatie

Vormgeving:
- Titel bovenaan: "Compositie en aggregatie"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
