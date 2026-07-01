# Posterprompt - H18: Bestandsverwerking

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Bestandsverwerking" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- De ``System.IO``-namespace geeft toegang tot het bestandssysteem: bestanden en folders uitlezen, schrijven, aanmaken en verwijderen, met een path (bv. ``c:\temp\mijnData.txt``) als unieke locatie
- ``Path.Combine`` en ``Environment.GetFolderPath`` bouwen paden platformonafhankelijk op (Windows gebruikt backslashes, Mac OS forward slashes), zodat je code niet breekt op een andere computer
- ``StreamWriter`` en ``StreamReader`` schrijven en lezen tekstbestanden regel per lijn, best binnen een ``using``-blok zodat het bestand automatisch en veilig wordt afgesloten
- ``File.ReadAllText``, ``File.ReadAllLines`` en ``File.WriteAllText`` zijn kant-en-klare static methoden voor kleine bestanden, zonder dat je zelf een lus moet schrijven
- ``BinaryWriter`` en ``BinaryReader`` schrijven en lezen binaire bestanden met verschillende datatypes, waarbij de leesvolgorde exact moet overeenkomen met de schrijfvolgorde
- De ``FileInfo``-klasse geeft detailinformatie over een bestand (``Name``, ``Length``, ``CreationTime``) en laat toe om te kopiëren, verplaatsen en verwijderen met ``CopyTo``, ``MoveTo`` en ``Delete``
- ``DirectoryInfo`` met ``GetFiles`` en ``GetDirectories`` doorzoekt folders en subfolders, eventueel met een searchPattern zoals ``*.txt``
- Serialiseren met ``System.Text.Json`` en ``JsonSerializer.Serialize``/``Deserialize`` zet een object (met publieke properties, geen private instantievariabelen) om naar leesbare JSON-tekst en terug
- Attributen zoals ``JsonIgnore``, ``JsonPropertyName`` en ``JsonInclude`` sturen bij welke instantievariabelen of properties wel of niet worden meegenomen bij het serialiseren

Vormgeving:
- Titel bovenaan: "Bestandsverwerking"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
