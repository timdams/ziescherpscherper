# Review: H17 Interfaces

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De analogie van interfaces als "stickers" / "blad papier met gaten" in [1_Interface_intro.MD](1_Interface_intro.MD) is een sterk mentaal model voor eerstejaars. De UML-illustraties (lolly + haakje) versterken dat beeld goed.
- De expliciete callout dat dit hoofdstuk *niet* over GUI gaat, voorkomt een klassiek misverstand bij beginners.
- De auto/USB/HDMI-vergelijking is concreet en zit dicht bij de leefwereld van de student.
- [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) (de `IComparable`-case) is didactisch sterk opgebouwd: probleem → documentatie lezen → implementatie → verfijning. Dit is precies hoe je in de praktijk een interface tegenkomt.
- De redenering "Minister wordt een bij-job" in [presidentinterfaces.md](presidentinterfaces.md) sluit mooi aan op het beperkings-argument (single inheritance) dat je eerder hebt opgebouwd.
- De voetnoot over `public` op interfacemembers (sinds C# 8) en de callout over default interface methods tonen dat je de moderne C# kent — zonder dat het ruis wordt voor beginners.

## Zwaktes

- De voorbeelden zijn quasi allemaal *fictief* (Zorro, DarthVader, Superhelden, Transformers). Voor het *waarom* werkt dat, maar voor *waar je dit in echte code zal tegenkomen* mis je een brug. `IComparable` in [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) is de enige echte case.
- Code-bug in [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) regel 122-126: tweede `CompareTo`-versie heeft geen `return 0`/return-pad bij gelijkheid en de `else throw` zit op het verkeerde niveau. Compileert niet zoals het er staat.
- Code-bug in [presidentinterfaces.md](presidentinterfaces.md) regel 57: `AlleMinisters.Add(new Ceo);` mist haakjes — moet `new Ceo()` zijn. Studenten gaan dat letterlijk overtypen.
- De stuk-zin "*Stel dat we deze  interface kunnen we gebruiken in een spel vechtspel*" in [1_Interface_intro.MD](1_Interface_intro.MD) regel 36 leest niet vlot.
- De inleidende paragraaf "Interfaces in de echte wereld" duurt erg lang (auto, USB, HDMI, audio…) voor je bij de C#-definitie komt. Voor herhalers / snelle lezers is dat veel ruis.
- "Een interface mag géén code bevatten" wordt eerst stellig beweerd (regel 77) en daarna meteen ontkracht (regel 84). Voor een beginner is "regel die toch niet helemaal klopt" verwarrend; overweeg de regel direct te nuanceren in plaats van eerst-stellen-dan-corrigeren.

## Onduidelijkheden

- De `is`-sectie aan het einde van [1_Interface_intro.MD](1_Interface_intro.MD) (regel 181+) overlapt met `18_IsAs/2_Polymorfisme_Interfaces.md`. De student leest in dit hoofdstuk al een mini-versie van wat dadelijk een eigen subhoofdstuk wordt. Of de mini-versie weghalen, of expliciet vooruitwijzen.
- "Interface kan ook overerven van een interface" (regel 244-250) komt zonder gebruikssituatie. Waarom zou je dat doen? Een mini-voorbeeld waarom `IGod : ISuperHeld` zinvol is, zou helpen.
- De UML-tekening (regel 136) gebruikt `WerkStudent` en `Student` door elkaar — onduidelijk welke nu de interface implementeert.
- De tip rond `landLijst = Array.Sort(landLijst.ToArray());` in [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) regel 159 klopt niet: `Array.Sort` geeft `void` terug. Dit gaat niet compileren.

## Gemissen

- **Vergelijking interface vs. abstracte klasse** ontbreekt volledig. Studenten komen net uit hoofdstuk Polymorfisme/Abstracte klassen en zullen *exact deze* vraag stellen. Een matrix (instantievariabelen, constructors, multiple, code-implementatie, "is-een" vs "kan-iets") is hier essentieel.
- **`IDisposable`** wordt later in H18 toch nodig (`using`-statement bij `StreamWriter`). Hier missen we de bridge — een mini-voorbeeld of vooruitwijzing zou helpen.
- **`IEquatable<T>`** als typed alternatief op `Equals(object)` — past mooi bij `18_IsAs/6_equals.md`.
- **`IEnumerable`** wordt vermeld in regel 3 van [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md), maar nooit uitgewerkt. Dit is dé brug naar LINQ en `foreach` — een gemiste kans.
- **Dependency injection / "program against interfaces, not implementations"** als motivatie. SOLID wordt aangeraakt in een callout (regel 256+) maar oppervlakkig.
- **Expliciete vs. impliciete implementatie** (`void IFoo.Bar() {}` vs `public void Bar()`) — relevant zodra een klasse twee interfaces heeft met dezelfde methodenaam.
- **Generic interfaces** (`IComparable<T>` i.p.v. de niet-generic versie). De gegeven `CompareTo(object obj)` met cast is de oude API; de generic versie is moderner én vermijdt de cast.

## Concrete suggesties

1. Vervang de niet-generic `IComparable` in [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) door `IComparable<Land>`. Dat schrapt meteen de hele cast-discussie en is wat IDE's nu suggereren.
2. Voeg na [1_Interface_intro.MD](1_Interface_intro.MD) een korte paragraaf "Interface vs. abstracte klasse" toe met een tabel.
3. Fix de drie code-bugs (`new Ceo()`, ontbrekende `return 0`, `Array.Sort`-returnvalue).
4. Schrap de mini-`is`-sectie aan het einde van [1_Interface_intro.MD](1_Interface_intro.MD); de volledige behandeling staat in `18_IsAs/2_Polymorfisme_Interfaces.md`.
5. Toon één concrete .NET-interface die de student de komende weken zelf gaat gebruiken (`IDisposable` + `using`, vooruitwijzend naar H18).
6. Vervang de UML-tekening met `WerkStudent` door een schema dat consistent is met de tekst eronder.

---

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — neem het Zorro/superhelden-fragment uit [1_Interface_intro.MD](1_Interface_intro.MD) en vraag de student wat er gebeurt als je een `IGod`-methode oproept op een `Mens`. Trainen op de compileertijd-vs-runtime-grens.
- **Klopt dit?** — AI-versie van [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) waarin `IComparable<Land>` correct lijkt, maar `CompareTo` `int.MaxValue` retourneert in plaats van een symmetrisch teken. Sorteer-output gaat dan stuk op edge-cases — de bug die LLM's geregeld maken.
- **Welke is beter?** — variant A met de niet-generic `IComparable` en cast (zoals nu in de cursus), variant B met `IComparable<Land>` zonder cast. Sluit aan bij Concrete Suggestie 1 uit de review.

### Stagiair Steven
- Steven implementeert `IDisposable` met een lege `Dispose()`-body en zegt "doet niks, dat is OK want het is een interface". Bridge naar H18 (`using`-statement) wordt zo natuurlijk.
- Steven kiest voor *abstracte klasse* waar een interface duidelijk beter past (bv. `IVliegt` op dieren én vliegtuigen). Perfect aanknopingspunt voor de "interface vs abstracte klasse"-tabel uit de Gemissen.

### Hall of Shame
- AI die een interface met *velden* genereert (`public string Naam;` in een interface) — leerzame fout omdat het de definitie van een interface direct test.
- AI die `IEnumerable<T>` overal "implementeert" door publiek een lijst te exposen in plaats van `GetEnumerator()` te leveren.

### Interview-suggestie
- Een back-end developer of DI-architect (.NET Core / ASP.NET): "waarom registreer je in DI altijd interfaces, nooit concrete klassen?". Geeft de SOLID-callout uit de review concrete bedding.

### Code-archeologie (oermens)
- Tijdlijn: C# 7 (interface = pure contract, geen body) → C# 8 default interface methods → C# 11 `static abstract` members. AI levert vaak code in de C# 7-stijl en mist de modernere mogelijkheden — exact wat dit hook moet trainen.

### Mondelinge code-review
- Hét klassieke verdedig-onderwerp: "Waarom koos je hier een interface en geen abstracte klasse?". Tabel uit het Gemis "Interface vs. abstracte klasse" wordt zo niet enkel gelezen maar mondeling toegepast — hoort thuis in een examen-rolspel met Stagiair Steven als sparringpartner.
- Variant: "Verdedig waarom je `IComparable<Land>` koos boven een eigen `Sorteer()`-methode op de klasse." Train studenten in het redeneren over uitbreidbaarheid.

### Taalkeuze-callout
- "Interfaces in C# liggen dicht bij TypeScript-`interface` (compileertijd-contract zonder runtime-overhead) en Go-interfaces (structureel, niet nominaal: een type *implementeert* een Go-interface gewoon door de juiste methodes te hebben). Python heeft sinds 3.8 `typing.Protocol`, eveneens structureel. C# is *nominaal*: je moet expliciet `: IComparable` schrijven."

### Lees-volgorde-pijlen
- Het `IComparable`-implementatiefragment in [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md): pijl 1 "interface declareren in classheader", pijl 2 "methode implementeren met juiste signatuur", pijl 3 "return-conventie −1/0/1", pijl 4 "Array.Sort vindt de implementatie automatisch". Maakt het impliciete contract zichtbaar.
