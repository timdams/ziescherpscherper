# Posterprompt - H6: Herhalingen

Kopieer de tekst hieronder (tussen de lijnen) in ChatGPT om via image-generatie een A4-poster te maken die dit hoofdstuk samenvat.

---

Maak een aantrekkelijke, uitnodigende A4-poster (staand formaat, 210x297mm, geschikt om af te drukken) die het hoofdstuk "Herhalingen" uit een C#-cursus voor beginnende programmeurs samenvat.

De poster moet inhoudelijk kloppen en deze kernpunten tonen:
- Een `while`-loop test de conditie vooraf en kan dus 0 of meerdere keren uitgevoerd worden; een `do while` test pas achteraf en wordt daardoor altijd minstens 1 keer uitgevoerd
- Vergeet je bij een `do while` de puntkomma na `while(conditie);`, dan is dat een klassieke syntaxfout
- Een `for`-loop bestaat uit drie delen tussen de haakjes: setup (bv. `int i = 0`), finish test (bv. `i < 11`) en update (bv. `i += 2`), en is de compactere manier om te loopen als je vooraf weet hoe vaak
- Een variabele die je binnen de accolades van een loop declareert, wordt elke iteratie opnieuw aangemaakt en verliest dus haar waarde; declareer ze buiten de loop als je een som of teller wilt bijhouden over alle iteraties heen
- Bij geneste loops (loop in een loop) noem je de omhullende de outer loop en de binnenste de inner loop; het totaal aantal uitvoeringen van de inner code is het aantal iteraties van de outer loop vermenigvuldigd met dat van de inner loop
- Vergeet je de tellervariabele van de inner loop te resetten bij elke ronde van de outer loop, dan loopt de inner loop nog maar 1 keer
- Een off-by-one-fout (bv. `i < 10` in plaats van `i <= 10`) is de klassieke beginnersfout waarbij een loop één keer te veel of te weinig uitvoert
- `continue` slaat de rest van de huidige iteratie over en springt naar de volgende; `break` stopt de loop onmiddellijk, en bij geneste loops haalt `break` je enkel uit de loop waarin het staat, niet uit de outer loop
- Gebruik `break` en `continue` spaarzaam: probeer eerst een goede stopconditie te schrijven, `break` is enkel echt gepast bij een zoek-en-stop-patroon

Vormgeving:
- Titel bovenaan: "Herhalingen"
- Kleuren: offwhite achtergrond (#f8f9fa), rood (#FF0000) en donkerrood (#B30000) als accentkleuren, lichtrood (#FFE5E5) voor kaders of vlakken, donkergrijze tekst (#4D4D4D)
- Overzichtelijke infographic-stijl met duidelijke secties of kaders, iconen en korte codefragmenten (geen lange codeblokken, geen volledige programma's)
- Nederlandstalige tekst op de poster
- Tekst mag nooit overlappen met lijnen, pijlen of kaders
- Rustig en professioneel, geen kinderlijke clipart

---

Tip: als de eerste versie te druk aanvoelt, vraag ChatGPT om een sectie te schrappen of te vereenvoudigen.
