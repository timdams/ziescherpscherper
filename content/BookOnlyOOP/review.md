# Review: Conclusie (BookOnlyOOP)

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De toon is warm, persoonlijk en in lijn met de rest van het boek. De "twee staten waarin je nu kan zijn" (enthousiast vs. verloren) is empathisch en herkenbaar. Studenten in groep 2 voelen zich niet weggezet.
- De afsluiter ("gebruik nooit `goto`") is een leuke knipoog en consistent met je stijl.
- De tekst is kort. Voor een conclusie van een 18-hoofdstukken-handboek is dat eigenlijk correct: niet uitsmijten met nóg een lap tekst.

## Zwaktes

- **Dit is geen conclusie, dit is een dankwoord/afsluitwoordje.** Een echte conclusie van een OOP-cursus zou minstens *iets* recapituleren: de vier OOP-pijlers (encapsulation, inheritance, polymorphism, abstraction), wanneer je welke gebruikt, hoe ze samenhangen. Nu zegt het boek "tot ziens" zonder de rode draad nog eens vast te knopen.
- De review-aanvraag in vetgedrukt ("iedere review helpt") is begrijpelijk, maar voelt commercieel midden in wat een didactische afsluiter zou moeten zijn. Eventueel naar een aparte voorlaatste paragraaf, niet vermengd met de afsluiting van de leerstof.
- Geen vooruitblik. Een eerstejaars die hier raakt, vraagt zich onmiddellijk af: *en nu?* Wat moet ik volgend jaar leren? LINQ? async/await? Entity Framework? WPF/MAUI? ASP.NET? Een minimale wegwijzer ("wat komt er na dit boek") ontbreekt — terwijl ik in [1_Interface_intro.MD](../16_interfaces/1_Interface_intro.MD) regel 5 zie dat je verwijst naar *een lijst aanbevelingen op de volgende pagina* en *de appendix*. Die brug naar de volgende pagina wordt hier dus opgezet maar ik zie in deze folder geen vervolg.

## Onduidelijkheden

- Welke "volgende pagina" wordt bedoeld? In [conclusie.md](conclusie.md) regel 5 staat "Bekijk zeker enkele aanbevelingen op de volgende pagina". Volgens de bestandsstructuur zou dat `ennu.md` moeten zijn — die zit niet in deze folder. Kan een lezer in PDF-vorm of als de hoofdstukvolgorde wijzigt, op een dood spoor belanden? Verwijs liever naar de exacte titel of een interne link.
- "Volgens m'n statistieken" — sympathieke openingszin, maar zijn die statistieken er echt? Een lezer kan zich afvragen of je ergens metingen hebt liggen. Kleine puntje.

## Gemissen

- **Echte recap van OOP-pijlers**. Eén pagina volstaat: encapsulation (private + properties, hfdst. ~7), inheritance (hfdst. 12-14), polymorphism (hfdst. 15-16), abstraction (abstract klasse + interface, hfdst. 16-17). Met één regel per concept "wanneer gebruik je het".
- **Vooruitblik op .NET-ecosysteem**: LINQ (rechtstreeks volgende stap), async/await, generics in de diepte, EF Core, ASP.NET Core, MAUI/WPF voor GUI. Studenten weten anders niet welk pad te kiezen.
- **Leesvoer**: één of twee concrete boekentips ("Pro C# 10", "C# in Depth" van Skeet, "Clean Code" Martin) met één zin waarom.
- **Doorverwijzing naar oefeningen-website / eindtests** voor wie wil consolideren. Past in dezelfde recap-paragraaf.
- **Een mini-checklist** "Kan je dit?" — *kan je een klasse schrijven met properties? overerving? interface implementeren? Dan ben je waar we wilden zijn.* Dat geeft groep-2-studenten een handvat om zelf in te schatten wat ze moeten herhalen.

## Concrete suggesties

1. Maak hier een echte conclusie van: ~1.5 pagina, met een korte recap van de vier OOP-pijlers en hoe ze in dit boek aan bod kwamen (met directe links naar relevante hoofdstukken).
2. Voeg een aparte sectie "En nu?" toe (of integreer met de bestaande `ennu.md`) met daarin LINQ / async / EF / MAUI als logische next steps.
3. Verplaats de review-vraag naar de allerlaatste regel(s), of naar een colofon, zodat hij niet de didactische afsluiter onderbreekt.
4. Vervang de generieke verwijzing "volgende pagina" door een expliciete naam/titel die ook na hoofdstuknummer-shuffle blijft kloppen.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit slothoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). **Het zwaartepunt voor deze conclusie is de slothoofdstuk-reflectie uit hoe.md sectie 3** — precies de plek waar het boek zijn *taal-onafhankelijke* belofte moet inlossen. De andere hooks komen hier slechts secundair aan bod, want de meeste zijn al per hoofdstuk verwerkt.

### Slothoofdstuk-reflectie — het zwaartepunt
De conclusie is dé natuurlijke landingsplek voor *"Als je morgen een Python-codebase moet lezen, welke C#-kennis neem je mee, welke niet?"*. Concrete invulling:

- **Mee te nemen** (cross-language): OOP-pijlers, control flow, scope, exception handling als *concept*, het idee van types, het verschil value/reference, het idee dat code leesbaar moet zijn.
- **Achter te laten** (C#-specifiek): exact-PascalCase-conventies, `using`-statements, properties met `{ get; set; }`-syntax, verplichte type-annotaties, namespace-structuur, bouwbestanden van .NET.
- **Anders, maar herkenbaar**: lambdas/delegates → Python lambdas, LINQ → list comprehensions / `map`/`filter`, async/await → Python `asyncio` / JS `async`. Eén tabelletje volstaat.
- **Mini-checklist "kan je dit?"** uit de bestaande Gemissen-lijst, hier in tweede plan; de reflectie staat voorop.

Dit voegt direct een vooruitblik toe (huidige Zwakte: "geen vooruitblik") *zonder* simpelweg "leer LINQ en EF Core" op te lijsten — het tilt de student naar een hoger reflectieniveau.

### Code Literacy als afsluiter
- **Welke is beter?** als slot-oefening: één korte taak in C#, Python en JavaScript naast elkaar. Student kiest welke versie bij welk domein hoort en motiveert. Sluit de Code Literacy-cirkel die het hele boek doortrok.

### Stagiair Steven — afscheid
- Eén pagina "wat heeft Steven dit jaar geleerd?" — terugblik op zijn beste blunders, evolutie van junior naar mid-junior. Verzegelt het personage in plaats van het te laten verdampen na het laatste hoofdstuk.

### Interview-suggestie
- Een **polyglot developer** (iemand die professioneel C#, Python én iets webs gebruikt) over hoe hij van taal wisselt: wat blijft hetzelfde, wat is vriction? Past pedagogisch perfect bij de slothoofdstuk-reflectie en geeft de student een echt rolmodel voor het na-het-boek-bestaan.

### Mondelinge code-review als brug
- De mondelinge-code-review-vaardigheid (sectie 2.5 van hoe.md) krijgt elders een eigen hoofdstuk, maar verdient hier minstens één alinea: *"de échte test van Code Literacy is niet of je het kan lezen — wel of je het kan uitleggen aan iemand die je weerlegt."* Brug naar het apart hoofdstuk en naar de werkvloer.

### Vooruitblik concreet
- Vervang de huidige losse zin "bekijk de volgende pagina" door een korte **paden-paragraaf**: web (ASP.NET Core), data (LINQ → EF Core → Python/Pandas), mobiel/desktop (MAUI), AI/ML (Python kennen wordt verplicht). Student kiest, het boek wijst.
