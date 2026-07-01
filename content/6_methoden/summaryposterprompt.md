# Posterprompt - H7: Methoden

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Methoden" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een methode is een herbruikbaar codeblok, herkenbaar aan de ronde haakjes, bv. `static void ToonTitel()`, en voorkomt dat je dezelfde code overal moet kopiëren
- Het returntype bepaalt wat een methode teruggeeft; `void` betekent dat er niets wordt teruggegeven, elk ander type (int, string, ...) vereist een `return`-statement
- Zodra `return` wordt bereikt stopt de methode onmiddellijk, ook als er nog code na die lijn staat
- Formele parameters (bv. `static int BerekenFaculteit(int grens)`) worden "by value" doorgegeven: de methode krijgt een kopie, aanpassingen binnen de methode laten de originele variabele buiten de methode ongewijzigd
- Named parameters laten je actuele parameters bij naam meegeven (bv. `PrintDetails(orderNum: 31, product: "Red Mug", seller: "Gift Shop")`), waardoor de volgorde er niet meer toe doet
- Optionele parameters krijgen een standaardwaarde in de signatuur (bv. `string optName = "unknown"`) en staan altijd achteraan de parameterlijst
- Method overloading laat je meerdere methoden met dezelfde naam en returntype maar andere parameters definiëren; de compiler kiest zelf de juiste versie op basis van de meegegeven argumenten
- IntelliSense toont bij het typen van een methode de methode-signatuur (returntype, naam, formele parameters) zodat je weet welke parameters in welke volgorde nodig zijn
- Een methode kan een andere methode aanroepen (methoden nesten), maar zonder stopconditie ontstaat een oneindige lus die het programma doet crashen

Vormgeving:
- Titel bovenaan: "Methoden"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
