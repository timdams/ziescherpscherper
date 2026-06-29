
## Klassen en objecten

Een elementair aspect binnen OOP is het verschil begrijpen tussen een klasse en een object.

Wanneer we meerdere objecten gebruiken van dezelfde soort dan kunnen we zeggen dat deze objecten allemaal deel uitmaken van een zelfde klasse. **Het OOP paradigma houdt ook in dat we de echte wereld gaan proberen te modeleren in code**. OOP laat namelijk toe om onze code zo te structureren zoals we dat ook in het echte leven doen. Alles om ons heen behoort tot een bepaalde klasse die alle objecten van dat type beschrijven. 

Neem eens een kijkje aan een druk kruispunt waar fietsers, voetgangers, auto's en verkeerslichten samenkomen[^jan]. Het is een erg hectisch geheel, toch kan je alles dat je daar ziet *classificeren*. We zien bijvoorbeeld allemaal mens-objecten die tot de klasse van de Mens behoren, maar ook:

* Alle mensen hebben gemeenschappelijke eigenschappen (binnen deze beperkte context van een kruispunt): ze bewegen of staan stil (gedrag), ze hebben een bepaalde kleur van jas (eigenschap). 
* Alle auto's behoren tot een klasse Auto. Ze hebben gemeenschappelijke zaken zoals:  een bouwjaar (eigenschap), ze werken op een bepaalde vorm van energie (eigenschap) en ze staan stil of bewegen (gedrag).
* Ieder verkeerslicht behoort tot de klasse VerkeersLicht.
* Fietsers behoren tot de klasse Fietser.

[^jan]:Dit voorbeeld is gebaseerd op de inleiding van het inzichtvolle boek "Handboek objectgeoriënteerd programmeren" door Jan Beurghs (EAN: 9789059406476).

### Definitie klasse en object

Volgende 2 definities druk je best af op een grote poster die je boven je bed hangt:

* **Een klasse** is als een **blauwdruk** (of prototype) dat het gedrag en toestand beschrijft van alle objecten van deze klasse.
* Een individueel **object** is een **instantie** van een klasse en heeft een eigen *toestand*, *gedrag* en *identiteit*.

Objecten zijn instanties met een eigen levenscyclus die wordt gekenmerkt door:

* **Gedrag**: deze wordt beschreven door de **methoden** in de klasse.
* **Toestand**: deze kan wijzigen door zijn eigen gedrag, of door externe impulsen en wordt bepaald door **datavelden** die beschreven staan in de klasse (properties en instantievariabelen). 
* **Identiteit** : een unieke naam van object zodat andere objecten ermee kunnen interageren.

:::{.callout-tip}
Je zou dit kunnen vergelijken met het grondplan voor een huis dat tien keer in een straat zal gebouwd worden. Het plan is de *klasse*. De effectieve huizen die we bouwen aan de hand van dit plan zijn de instanties of objecten van deze klasse. Ieder huis heeft een eigen toestand (ander type bakstenen, wel of geen zonnepannelen) en gedrag (rolluiken gaan open als de zon opkomt).
:::

De klasse beschrijft het algemene **gedrag** van de individuele objecten. Dit gedrag wordt meestal bepaald door de interne staat van ieder object op zichzelf, de zogenaamde **eigenschappen**. Nemen we het voorbeeld van de klasse Auto: de huidige snelheid van een individueel auto-object is mogelijks gebaseerd op het merk (eigenschap) van die auto, alsook welke energiebron (eigenschap) die auto heeft. 

Voorts kunnen objecten ook beïnvloed worden door 'de buitenwereld': naast de interne staat van ieder object, leven de objecten natuurlijk in een bepaalde context, zoals een druk kruispunt. Andere objecten op dat kruispunt kunnen invloed hebben op wat een auto-object doet. 

Met andere woorden: we kunnen 'van buiten uit' vaak ook het gedrag en de interne staat van een object aanpassen. We hebben dit reeds zien gebeuren in het Pong-voorbeeld: de interne staat van ieder individueel balletjes-object is z'n positie alsook z'n richtingsvector. De buitenwereld, in dit geval onze ``Main`` methode kon echter de objecten manipuleren:

* Het gedrag van een balletje konden we aanpassen met behulp van de ``Update`` en ``TekenOpScherm`` methode.
* De interne staat via de eigenschappen die zichtbaar zijn aan de buitenwereld (dankzij het ``public`` keyword) .

:::{.callout-tip}
Wanneer je later de specificaties voor een opdracht krijgt en snel wilt ontdekken wat potentiële klassen zijn, dan is het een goede tip om op zoek te gaan naar de zelfstandige naamwoorden (*substantieven*) in de tekst. Dit zijn meestal de objecten en/of klassen die jouw applicatie zal nodig hebben.
:::

:::{.callout-tip}
95% van de tijd zullen we in dit boek de voorgaande definitie van een klasse beschrijven, namelijk de blauwdruk voor de objecten die er op gebaseerd zijn. Je zou kunnen zeggen dat de klasse een fabriekje is dat objecten kan maken.
Echter, wanneer we het ``static`` keyword zullen bespreken gaan we ontdekken dat heel af en toe een klasse ook als een soort object door het leven kan gaan. Heel vreemd allemaal!
:::

### Abstractie en encapsulatie

Een belangrijk concept bij OOP is het **Black-box** principe waarbij we de afzonderlijke objecten en hun werking als zwarte dozen gaan beschouwen. 

Neem het voorbeeld van de auto: deze is in de echte wereld ontwikkeld volgens het blackbox-principe. De werking van de auto kennen tot in het kleinste detail is niet nodig om met een auto te kunnen rijden. De auto biedt een aantal zaken aan de buitenwereld aan (het stuur, pedalen, het dashboard), wat we de **"interface"** noemen. De interface kan je gebruiken om de interne staat van de auto uit te lezen of te manipuleren. Stel je voor dat je moest weten hoe een auto volledig werkte voor je ermee op de baan kon...

Binnen OOP wordt dit blackbox-concept **abstractie** en **encapsulatie** genoemd. Het doel van OOP is programmeurs zoveel mogelijk af te schermen van de interne werking van je klasse code. Vergelijk het met de methoden uit hoofdstuk 7: "if it works, it works" en dan hoef je niet in de code van de methode te gaan zien wat er juist gebeurt telkens je de methode wil gebruiken.

Bij encapsulatie bedoelen we dat we alle zaken die samen horen bij een auto samenvoegen tot één geheel. De motor, de banden, ieder componentje in de motor, enz. Al deze zaken *encapsuleren* we in één geheel. Vervolgens gaan we met de hulp van abstractie de complexiteit naar de buitenwereld toe kunnen vereenvoudigen.

Kortom: *hoe minder de buitenwereld moet weten om met een object te werken, hoe beter.* 

Beeld je in dat je 10 lijnen code nodig had om een random getal te genereren. Niemand zou de klasse ``Random`` nog gebruiken. Dankzij de ontwikkelaar van deze klasse hoeven we maar 2 zaken te kunnen:

* Een ``Random``-object aanmaken met ``new``/
* De ``Next``-methode aanroepen om een getal uit het object te krijgen

Wat er nu juist in die methode gebeurt boeit ons niet. *It just works!* Met dank aan abstractie en de kracht van OOP.

<!-- TODO ed.5 (review): overweeg de "A PIE"-acroniemsectie + Steve Jobs-quote naar het einde van het hoofdstuk te verplaatsen (eerst doen/praktijk, dan filosoferen). Vereist herordening, beslissing aan Tim. -->
<!-- TODO ed.5 (review): 'internal' in de klassedeclaraties wordt nog niet uitgelegd; overweeg een korte "toverwoord"-mention zoals bij static. -->

### Tijd voor taart

Een truukje om de belangrijkste concepten van OOP te onthouden is het acroniem **A PIE**, dat staat voor:

* **A**bstractie
* **P**olymorfisme
* **I**nheritance, oftewel overerving
* **E**ncapsulatie

Abstractie (het vereenvoudigen van de complexe, interne structuur van een klasse) en encapsulatie (alle aspecten die in de klasse horen) hebben we net besproken. Polymorfisme zullen we pas in hoofdstuk 16 aanpakken. Inheritance komt al in hoofdstuk 13 in actie. Nog even geduld dus.

### Objecten in de woorden van Steve Jobs

Steve Jobs, de oprichter van Apple, was een fervent fan van OOP. In een interview in 1994 voor het Rolling Stone magazine gaf hij volgende uitleg:

*"Objects are like people. They’re living, breathing things that have knowledge inside them about how to do things and have memory inside them so they can remember things. And rather than interacting with them at a very low level, you interact with them at a very high level of abstraction, like we’re doing right here.*

*Here’s an example: If I’m your laundry object, you can give me your dirty clothes and send me a message that says, "Can you get my clothes laundered, please." I happen to know where the best laundry place in San Francisco is. And I speak English, and I have dollars in my pockets. So I go out and hail a taxicab and tell the driver to take me to this place in San Francisco. I go get your clothes laundered, I jump back in the cab, I get back here. I give you your clean clothes and say, "Here are your clean clothes."*

*You have no idea how I did that. You have no knowledge of the laundry place. Maybe you speak French, and you can’t even hail a taxi. You can’t pay for one, you don’t have dollars in your pocket. Yet, I knew how to do all of that. And you didn’t have to know any of it. All that complexity was hidden inside of me, and we were able to interact at a very high level of abstraction. That’s what objects are. They encapsulate complexity, and the interfaces to that complexity are high level."*

Vooral die laatste zin verdient het om nog eens in vet herhaald te worden: **"They encapsulate complexity, and the interfaces to that complexity are high level."**

>![](../assets/attention.png)Ik zie dat je gereedsschapkist al aardig gevuld is. Zoals je misschien al gemerkt hebt aan deze sectie, zullen we vanaf nu ook geregeld minder "praktische" en eerder "filosofische" zaken tegenkomen. Maar wees gerust, je zal toch een grotere gereedsschapkist nodig hebben. Echter, net zoals een voorman niet alleen moet kunnen metsen en timmeren, maar ook stabiliteitsplannen begrijpen, zal ook jij moeten begrijpen wat de grotere ideeën achter bepaalde concepten zijn.
>
>Zet nu je helm maar op, want in de volgende sectie gaan we wel degelijk onze handen lekker vuil maken!

