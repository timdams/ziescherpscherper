# Posterprompt - H14: Gevorderde overervingsconcepten

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Gevorderde overervingsconcepten" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Alle klassen in C# erven impliciet over van de oer-klasse System.Object, ook ingebouwde types zoals int en bool
- System.Object geeft elke klasse vier ingebouwde methoden mee: ToString(), Equals(), GetHashCode() en GetType()
- Drie van die vier methoden zijn virtual en kun je overriden (ToString, Equals, GetHashCode); GetType() bewust niet
- Override je Equals(), dan moet je ook GetHashCode() overriden, anders werkt de klasse fout als sleutel in een Dictionary
- Een abstracte klasse (keyword abstract) kan geen instanties hebben, maar dient als parent-klasse met gedeelde code, zoals Dier voor Paard en Wolf
- Een abstracte methode heeft geen implementatie in de parent-klasse en verplicht elke child-klasse om ze te overriden
- Ook properties kunnen abstract zijn: enkel de signatuur staat vast, de child-klasse vult de implementatie in
- Eigen exceptions maak je door te overerven van Exception, met drie standaardconstructors (leeg, met message, met inner exception)
- Bij het herwerpen van een opgevangen exception gebruik je throw; in plaats van throw ex; om de originele stack trace te bewaren

Vormgeving:
- Titel bovenaan: "Gevorderde overervingsconcepten"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
