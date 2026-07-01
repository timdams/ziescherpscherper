# Posterprompt - H13: Overerving

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Overerving" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Overerving duid je in C# aan met een dubbele punt, bijvoorbeeld `class Paard : Dier`, waarbij Paard de child-klasse is en Dier de parent-klasse
- Er moet een realistische "is een"-relatie bestaan (een paard is een dier), niet zomaar gelijkaardige code: "heeft een" wijst op associatie, geen overerving
- De child-klasse erft alles over van de parent (methoden, properties, instantievariabelen), maar private instantievariabelen van de parent blijven ontoegankelijk; met protected worden ze wel bereikbaar in de child-klasse
- Bij het aanmaken van een child-object wordt eerst de constructor van de verste voorouder uitgevoerd, dan stap voor stap naar beneden tot de constructor van de klasse zelf
- Met `base(...)` roep je vanuit de child-constructor expliciet een specifieke overloaded constructor van de parent-klasse aan, bijvoorbeeld `public VeldArts(): base(true)`
- Een methode moet `virtual` zijn in de parent-klasse voor een child-klasse ze mag `override`n, zoals `public virtual void Vlieg()` en `public override void Vlieg()`
- Vergeet je `override` en schrijf je gewoon dezelfde methode opnieuw, dan krijg je hiding in plaats van overriding en blijft de parent-versie draaien via een parent-referentie
- Met `base.MethodeNaam()` roep je binnen een override toch de originele parent-implementatie op, bijvoorbeeld `base.PoetsAlles()` om de basiskost mee te tellen
- C# laat geen multiple inheritance toe (een klasse kan maar van één parent overerven) en een `sealed` klasse kan zelf niet meer overgeërfd worden

Vormgeving:
- Titel bovenaan: "Overerving"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
