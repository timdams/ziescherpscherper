# Beslissingen <!--\label{ch:5}-->

Om de twee dagen wandel ik naar Bakker Aldo in Berchem. Artisanaal brood, met een korst waar je iets voor moet doen (mijn kinderen delen die goesting niet).

De programma's die we tot nu toe hebben ontwikkeld waren steevast lineair van opbouw.  Ze werden lijn per lijn uitgevoerd, van start tot einde, zonder de mogelijkheid om de **program flow** aan te passen. Het programma doorliep de lijnen code braaf na elkaar en wanneer deze aan het einde kwam sloot het zich af.

Onze programma's waren met andere woorden niet meer dan een eenvoudige lijst van opdrachten, zoals het lijstje dat beschrijft hoe ik aan dat brood geraak:


```text
Neem geld uit spaarpot
Wandel naar Bakker Aldo
Vraag om een brood
Krijg het brood
Betaal het geld aan de bakker
Keer huiswaarts
Smullen maar
```


Alhoewel dit algoritme redelijk duidelijk is en goed zal werken, zal de realiteit echter zelden zo rechtlijnig zijn. Van zodra 1 van de stappen faalt (bijvoorbeeld omdat de bakker toe is) zal ook de rest van het algoritme niet meer werken. 

Een beter algoritme zal afhankelijk van de omstandigheden (bakker gesloten, geen geld meer, enz.) andere stappen ondernemen. **Het programma zal beslissingen maken gebaseerd op keuzes** doorheen het programma:


```text
Neem geld uit spaarpot
Geld op? Stop dan hier, anders: ga verder
Wandel naar Bakker Aldo
Bakker toe? Stop dan hier, anders: ga verder
Vraag om een brood
Krijg het brood
Betaal het geld aan de bakker
Regent het? Neem de bus naar huis, anders: wandel naar huis
Smullen maar
```

![De eerste twee tests uit dit algoritme, uitgezet op de weg naar de bakker.](../assets/2_beslissingen/bakkerroute.png)<!--{width=90%}-->

De code die je tot nu toe schreef bestond enkel uit **sequentie**: de ene opdracht na de andere, in de volgorde waarin je ze neerschreef. In dit hoofdstuk komt daar **selectie** bij: op basis van een test beslist je programma welk stuk code het uitvoert en welk stuk het overslaat. Later komt er nog **iteratie** bij (hetzelfde stuk code meermaals herhalen), maar dat is voor het hoofdstuk over lussen. Veel meer smaken zijn er niet: elk algoritme dat je ooit zal schrijven is een combinatie van die drie.[^bohmjacopini]

[^bohmjacopini]: Dat is geen boute bewering van mij, maar een bewezen stelling uit 1966 van de Italiaanse informatici Corrado Böhm en Giuseppe Jacopini.

Zulke tests zitten in elk programma dat je dagelijks gebruikt. Netflix test bij elke titel of je die al voor een stuk bekeken hebt, en zet er op basis daarvan de knop om verder te kijken bij in plaats van de knop om te starten.

Doorheen dit hoofdstuk teken ik zulke keuzes ook regelmatig uit als een **flowchart**: een schema dat toont welke weg je programma door de code kan afleggen. Veel vormen heb je daar niet voor nodig:

![De vormen die in de flowcharts van dit hoofdstuk terugkomen.](../assets/2_beslissingen/flowchartlegende.png)<!--{width=55%}-->

Een ruit heeft altijd precies twee uitgangen. De test die erin staat kan immers maar twee antwoorden opleveren: waar of niet waar.
