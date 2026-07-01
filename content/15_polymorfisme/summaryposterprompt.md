# Posterprompt - H16: Polymorfisme

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Polymorfisme" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Polymorfisme laat toe om een child-object (bv. `Varken`, `Paard`) te bewaren in een variabele van het parent-type (`Dier`), en toch via `override` het geluid van het echte object te horen: dit heet late binding of dynamic dispatch
- Upcasting (child naar parent-variabele) gebeurt automatisch; downcasting (terug naar het child-type) is foutgevoeliger en gebeurt veilig met `is` en `as`
- Een `List<Dier>` of `List<Minister>` kan objecten van verschillende child-klassen bevatten en toch via één `foreach`-lus dezelfde methode aanroepen, zonder type-checks
- Het Liskov substitution principle: een child-klasse moet zich overal kunnen gedragen als zijn parent, anders leidt de "is een"-relatie tot brokkelige code
- Het `is`-keyword geeft een `bool` terug om te checken of een object van een bepaald type is; het `as`-keyword zet een object om naar een ander type en geeft `null` terug als dat niet lukt, in plaats van een exception
- Pattern matching (`if (mijnAuto is Voertuig v)`) combineert de `is`-check en de omzetting in één stap, en is de vorm die je vandaag het vaakst tegenkomt
- Wie `Equals` overridet om objecten op inhoud te vergelijken (in plaats van op referentie met `==`), gebruikt `is`/`as` of pattern matching om veilig te casten, en moet ook `GetHashCode` overriden zodat het object correct werkt als key in een `Dictionary` of `HashSet`
- Stagiair Steven herbouwt met de hand (via losse `if (minister is MinisterX)`-checks) wat polymorfisme gratis doet, waardoor zijn code broos wordt: een nieuw type minister wordt gegarandeerd ergens vergeten

Vormgeving:
- Titel bovenaan: "Polymorfisme"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
