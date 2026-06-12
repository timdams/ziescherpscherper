# Review: H17 Interfaces

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De analogie van interfaces als "stickers" / "blad papier met gaten" in [1_Interface_intro.MD](1_Interface_intro.MD) is een sterk mentaal model voor eerstejaars. De UML-illustraties (lolly + haakje) versterken dat beeld goed.
- De expliciete callout dat dit hoofdstuk *niet* over GUI gaat, voorkomt een klassiek misverstand bij beginners.
- De auto/USB/HDMI-vergelijking is concreet en zit dicht bij de leefwereld van de student.
- [2_InterfacesInPraktijk.md](2_InterfacesInPraktijk.md) (de `IComparable`-case) is didactisch sterk opgebouwd: probleem → documentatie lezen → implementatie → verfijning. Dit is precies hoe je in de praktijk een interface tegenkomt.
- De redenering "Minister wordt een bij-job" in [presidentinterfaces.md](presidentinterfaces.md) sluit mooi aan op het beperkings-argument (single inheritance) dat je eerder hebt opgebouwd.
- De voetnoot over `public` op interfacemembers (sinds C# 8) en de callout over default interface methods tonen dat je de moderne C# kent — zonder dat het ruis wordt voor beginners.

## Zwaktes

- `[~]` De voorbeelden zijn quasi allemaal *fictief*. **(`IComparable` blijft de echte case; een extra echt-wereld-voorbeeld (bv. IDisposable) staat als TODO. Bewust niet alle fictie vervangen.)**
- `[v]` Code-bug in `CompareTo` (geen `return 0` bij gelijkheid). **(``return 0;`` toegevoegd; nu compileert het.)**
- `[v]` Code-bug `AlleMinisters.Add(new Ceo);` mist haakjes. **(gefixt naar `new Ceo()`.)**
- `[v]` De stuk-zin "Stel dat we deze interface kunnen we gebruiken in een spel vechtspel". **(herschreven.)**
- `[~]` De inleidende "Interfaces in de echte wereld" duurt lang. **(stilistisch; bewust gelaten, inkorten aan Tim.)**
- `[v]` "Een interface mag géén code bevatten" wordt eerst stellig, dan ontkracht. **(de regel is nu direct genuanceerd: "in de regel géén code, één uitzondering sinds C# 8".)**

## Onduidelijkheden

- `[v]` De mini-`is`-sectie overlapt met 18_IsAs. **(expliciete vooruitwijzing toegevoegd dat is/as volledig in H18 komt; mini-versie behouden als kennismaking.)**
- `[v]` "Interface erft van interface" zonder gebruikssituatie. **(mini-reden + voorbeeld toegevoegd: `IGod : ISuperHeld` met een extra methode.)**
- `[c]` UML-tekening gebruikt `WerkStudent`/`Student` door elkaar. **(TODO-comment geplaatst; figuur aanpassen is aan Tim.)**
- `[v]` De `landLijst = Array.Sort(...)`-tip klopt niet (`Array.Sort` is `void`). **(herschreven: array apart sorteren, met expliciete uitleg dat Array.Sort niets teruggeeft.)**

## Gemissen

- `[v]` **Vergelijking interface vs. abstracte klasse** ontbrak. **(callout met vergelijkingstabel toegevoegd, incl. vuistregel.)**
- `[c]` **`IDisposable`** bridge naar H18. **(TODO-comment geplaatst.)**
- `[c]` **`IEquatable<T>`** als typed alternatief. **(TODO-comment geplaatst.)**
- `[c]` **`IEnumerable`** vermeld maar niet uitgewerkt. **(TODO-comment geplaatst.)**
- `[c]` **Dependency injection / SOLID** oppervlakkig. **(TODO-comment geplaatst.)**
- `[c]` **Expliciete vs. impliciete implementatie**. **(TODO-comment geplaatst.)**
- `[c]` **Generic interfaces** (`IComparable<T>`). **(TODO-comment geplaatst om de niet-generieke versie te vervangen; de huidige (gefixte) versie blijft voorlopig.)**

## Concrete suggesties

1. `[c]` Vervang niet-generic `IComparable` door `IComparable<Land>`. **(TODO-comment geplaatst.)**
2. `[v]` Paragraaf "Interface vs. abstracte klasse" met tabel. **(toegevoegd.)**
3. `[v]` Fix de drie code-bugs (`new Ceo()`, `return 0`, `Array.Sort`). **(alle gedaan.)**
4. `[~]` Schrap de mini-`is`-sectie. **(behouden als kennismaking, met expliciete vooruitwijzing naar H18 i.p.v. schrappen.)**
5. `[c]` Toon `IDisposable` + `using` als vooruitwijzing naar H18. **(TODO-comment geplaatst.)**
6. `[c]` UML-tekening consistent maken. **(TODO-comment geplaatst.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

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
