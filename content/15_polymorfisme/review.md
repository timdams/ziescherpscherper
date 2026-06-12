# Review: Polymorfisme

> Interne didactische review - niet bedoeld voor publicatie.

> **Status editie 5** (verwerkt op 2026-06-11). Markering per punt:
> `[v]` gedaan · `[~]` deels of aangepast aan een stijlkeuze · `[c]` als verborgen TODO-comment in de tekst gezet · `[>]` bewust uitgesteld. De **Future**-sectie en de mini-oefeningen zijn nog niet aangepakt.

## Sterktes

- De etymologie ("poly" + "morfisme" = meerdere vormen) op regel 5 in [11_polymo_intro.MD](11_polymo_intro.MD) is een directe kapstok om de naam te onthouden.
- Het `Dier`/`Paard`/`Varken`-voorbeeld is consistent met het vorige hoofdstuk en hergebruikt `MaakGeluid` — studenten herkennen de code en kunnen mentaal sneller schakelen.
- De gearceerde-deel-tekening op regel 48 (varken/paard met onbereikbaar deel) is een sterke visuele voorstelling van wat upcasting betekent in geheugen.
- Het ministerie-voorbeeld in [polypraktijd.md](polypraktijd.md) is uitstekend gekozen: het start met *slecht* design en evolueert naar elegante code in drie stappen — een "before/after" dat het *nut* van polymorfisme tastbaar maakt, niet enkel de syntax.
- De `List<Minister>`-stap (ten derde) op regel 113-131 toont haarscherp hoe polymorfisme samenwerkt met collections.
- De laatste tip-callout op regel 135-137 ("merk op dat compositie hier ook gebruikt wordt") koppelt de twee hoofdstukken slim aan elkaar.

## Zwaktes

- `[v]` Polymorfisme wordt enkel als subtype-polymorfisme gepresenteerd; andere vormen niet genoemd. **(voetnoot toegevoegd over overloading (H7) en generics (appendix).)**
- `[~]` De terugkerende "vierde pijler"/A PIE-herhaling. **(stilistisch; bewust gelaten, herordening/inkorten aan Tim.)**
- `[v]` De Pong-subklassen worden zonder code getoond. **(een concrete `InstabielBalletje`-implementatie toegevoegd met `override Update()` + `base.Update()`.)**
- `[c]` Bestandsnaam-typo `polypraktijd` → `polypraktijk`. **(TODO-comment geplaatst; rename vereist _quarto.yml-aanpassing.)**
- `[v]` `System.Object mijnObject = new Varken();` "geluid maken werkt niet" zonder *waarom*. **(uitgelegd: de compiler kijkt naar het variabele-type, niet naar het echte object.)**

## Onduidelijkheden

- `[v]` "**upcasting**" zonder tegenpool "downcasting" + ontbrekende cross-ref naar 18_IsAs. **(downcasting benoemd, met expliciete forward-link naar hoofdstuk 18 (is/as).)**
- `[v]` "enkel zaken die `override` zijn" is cryptisch. **(uitgelegd als *late binding* in de callout.)**
- `[v]` "Polymorfisme zorgt dat `virtual`/`override` werken" wordt niet uitgelegd. **(de late-binding-callout legt nu uit dat het enkel werkt dankzij `virtual`/`abstract`.)**
- `[v]` De lege `MinisterBZ`/`MinisterVanEconomie` compileren niet (abstracte methode niet geïmplementeerd). **(beide voorzien van een minimale `override Adviseer`; ook een dubbele accolade in MinisterVanMilieu gefixt + verklarende callout.)**

## Gemissen

- `[v]` **Liskov Substitution Principle (informeel)**. **(callout-tip toegevoegd met de vierkant/rechthoek-payoff en de kernvraag.)**
- `[v]` **Late binding / dynamic dispatch**: de mechaniek werd verzwegen. **(callout toegevoegd die late binding expliciet benoemt en uitlegt.)**
- `[v]` **Waarom is `virtual` nodig?**. **(de late-binding-callout maakt dit nu expliciet: zonder virtual/abstract geen late binding.)**
- `[v]` **Andere vormen van polymorfisme** (overloading, generics). **(voetnoot toegevoegd.)**
- `[v]` **Cross-reference naar 18_IsAs**. **(toegevoegd bij de downcasting-uitleg.)**
- `[c]` **Polymorfisme breekt bij `new` (hiding)**: tonen dat polymorfisme dan niet werkt. **(TODO-comment kan; hangt samen met de hiding-sectie die in H13 als TODO staat. Genoteerd, niet inline toegevoegd.)**

## Concrete suggesties

1. `[c]` Hernoem `polypraktijd.md` → `polypraktijk.md`. **(TODO-comment geplaatst.)**
2. `[v]` Eén concrete Pong-subklasse-implementatie. **(InstabielBalletje toegevoegd.)**
3. `[v]` Vul `MinisterBZ`/`MinisterVanEconomie` aan met een `override`. **(gedaan.)**
4. `[v]` Late binding / dynamic dispatch-uitleg. **(callout toegevoegd.)**
5. `[v]` Introduceer downcasting + forward-link naar is/as. **(gedaan.)**
6. `[v]` Liskov mini-callout. **(toegevoegd.)**
7. `[v]` Voetnoot andere soorten polymorfisme. **(toegevoegd.)**

---

> **Future: nog niet aangepakt.** Onderstaande ideeën zijn bewust uitgesteld (afspraak: future-gedeelte komt later).

## Future — ideeën voor de nieuwe editie

> Aanknopingspunten bij dit hoofdstuk voor de toekomstvisie uit [../../future/hoe.md](../../future/hoe.md). Bouwt voort op wat hierboven al opgemerkt is.

### Code Literacy — drie oefentypes
- **Wat doet dit?** — toon het `System.Object mijnObject = new Varken();`-fragment (regel 67-70 in [11_polymo_intro.MD](11_polymo_intro.MD)) en vraag wat `mijnObject.MaakGeluid()` doet vóór de student de IDE opent. De gemiste *waarom*-uitleg uit de review wordt zo de leeropdracht zelf.
- **Klopt dit?** — AI levert een `Minister`-hiërarchie waar `Adviseer()` géén `virtual` heeft, maar de subklassen wel `override` proberen. Compileerfout, maar de AI commentariëert vrolijk "polymorfisme werkt nu". Klassieke LLM-blind-spot.
- **Welke is beter?** — twee versies van het ministerie-voorbeeld uit [polypraktijd.md](polypraktijd.md): één met aparte `if (minister is MinisterBZ)`-takken, één met polymorf `minister.Adviseer()`. Verdedig waarom variant 2 beter schaalt.

### Stagiair Steven
- Steven schrijft `new` (hiding) in plaats van `override` en is overtuigd dat "het werkt". De student moet aantonen *waar* polymorfisme breekt — perfecte aanleiding voor late binding uit te leggen.
- Steven implementeert `InstabielBalletje` zonder `override` op `Beweeg()`. Op Pong lijkt het juist tot je de balletjes via een `List<Balletje>` aanstuurt.

### Hall of Shame
- AI-code waarin een `switch (animal.GetType().Name)` op string-vergelijkingen wordt gebouwd — exact wat polymorfisme moest vervangen. Komt vaak terug omdat veel tutorials uit het pre-OOP-tijdperk dit voordoen.

### Interview-suggestie
- Een game-developer (Pong is daar een directe brug) over hoe LLM's vandaag inheritance-hiërarchieën genereren voor entity-systems, en waarom de industrie steeds vaker naar ECS (entity-component-system) en compositie overstapt.

### Code-archeologie (oermens)
- Tijdlijn: pre-C# `virtual`/`override` (manuele dispatch via type-checks), klassieke `virtual`/`override` (jaren 2000), C# 7 pattern matching, vandaag steeds meer `record` + switch-expressions. De oermens als gids: "in mijn tijd schreven we een grote `if-else` op `GetType()`".

### Mondelinge code-review
- Klassieker: laat de student mondeling verdedigen waarom een methode `virtual` is gemaakt en een andere niet. Gekoppeld aan Liskov: "kan je uitleggen waarom een `Vierkant` niet veilig van `Rechthoek` mag erven?". Sluit aan bij het Gemis "Liskov Substitution Principle" uit de review hierboven.

### Taalkeuze-callout
- "In Python werkt polymorfisme zonder `virtual` (duck typing): elk object dat `MaakGeluid()` heeft, doet mee. In Java is élke methode default `virtual`; in C++ moet je het *expliciet* opvragen. C# zit daar didactisch tussen — en dat dwingt je net om bewust te kiezen."
