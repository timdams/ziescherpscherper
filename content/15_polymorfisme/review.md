# Review: Polymorfisme

> Interne didactische review — niet bedoeld voor publicatie.

## Sterktes

- De etymologie ("poly" + "morfisme" = meerdere vormen) op regel 5 in [11_polymo_intro.MD](11_polymo_intro.MD) is een directe kapstok om de naam te onthouden.
- Het `Dier`/`Paard`/`Varken`-voorbeeld is consistent met het vorige hoofdstuk en hergebruikt `MaakGeluid` — studenten herkennen de code en kunnen mentaal sneller schakelen.
- De gearceerde-deel-tekening op regel 48 (varken/paard met onbereikbaar deel) is een sterke visuele voorstelling van wat upcasting betekent in geheugen.
- Het ministerie-voorbeeld in [polypraktijd.md](polypraktijd.md) is uitstekend gekozen: het start met *slecht* design en evolueert naar elegante code in drie stappen — een "before/after" dat het *nut* van polymorfisme tastbaar maakt, niet enkel de syntax.
- De `List<Minister>`-stap (ten derde) op regel 113-131 toont haarscherp hoe polymorfisme samenwerkt met collections.
- De laatste tip-callout op regel 135-137 ("merk op dat compositie hier ook gebruikt wordt") koppelt de twee hoofdstukken slim aan elkaar.

## Zwaktes

- Polymorfisme wordt hier vrijwel uitsluitend gepresenteerd als *subtype-polymorfisme via overerving*. Het woord "polymorfisme" is breder (overloading, generics) en die andere vormen worden niet eens genoemd — niet eens als "we noemen er hier één, er bestaan andere".
- De openingsregel "vierde grote pijler" en het terugkerende A PIE-acroniem komt nu voor de zoveelste keer terug. Bij elk hoofdstuk in deze reeks staat een variatie. Eén keer in de inleiding van het boek volstaat.
- De Pong-paragraaf op regel 101-118 introduceert drie nieuwe `Balletje`-subklassen (`InstabielBalletje`, `TeleportBalletje`) zonder code te tonen. De student moet ze zelf bedenken om de demo te begrijpen — terwijl de demo net moet illustreren *dat* het werkt.
- [polypraktijd.md](polypraktijd.md) heeft een typo in de bestandsnaam: "polypraktijd" → vermoedelijk "polypraktijk". Dit wordt opgenomen in URL/sidebar.
- Op regel 67-70 in [11_polymo_intro.MD](11_polymo_intro.MD) staat een belangrijk fenomeen impliciet: `System.Object mijnObject = new Varken();` werkt, "maar geluid maken werkt niet". Het *waarom* (statische binding op variable type) wordt overgeslagen — dit is precies waar studenten over struikelen.

## Onduidelijkheden

- De term "**upcasting**" valt op regel 61 zonder dat een tegenpool ("downcasting") wordt benoemd. Studenten weten daarna niet dat ook het omgekeerde mogelijk is (en gevaarlijk). Dit is precies de brug naar [content/18_IsAs/](../18_IsAs/), maar de cross-reference ontbreekt hier.
- Op regel 46 in [11_polymo_intro.MD](11_polymo_intro.MD): "enkel zaken die `override` zijn in de child-klasse zullen met de specialisatie-code werken". Dat is correct, maar voor een eerstejaars cryptisch — leg uit dat dit *late binding* heet, of vermijd de jargon-vrije halve uitleg.
- "Polymorfisme zorgt ervoor dat `virtual` en `override` effectief werken" (regel 7) wordt geponeerd maar niet uitgelegd. Pas later wordt dat helder, en zelfs daar wordt het mechanisme niet benoemd.
- Het code-voorbeeld op regel 95-115 in [polypraktijd.md](polypraktijd.md) toont stap 1 ("alle ministers overerven van abstract `Minister`"), maar de drie subklassen `MinisterBZ` en `MinisterVanEconomie` op regel 85-86 worden als lege klassen getoond — dan krijg je een compileerfout omdat de abstracte methode niet geïmplementeerd is. Studenten die kopiëren raken in de war.

## Gemissen

- **Liskov Substitution Principle (informeel)**: nu polymorfisme *werkt*, hoort hier minstens een waarschuwing dat een child-klasse zich gedragsmatig moet kunnen gedragen als parent. Het klassieke `Vierkant : Rechthoek`-voorbeeld dat in H13 al hoort opgeworpen te zijn, kan hier de payoff krijgen.
- **Late binding / dynamic dispatch**: het concept dat *de runtime* beslist welke override wordt aangeroepen (op basis van het werkelijke object, niet het variabele-type) is *de* magie van polymorfisme. Nu staat er enkel "het werkt" — de mechaniek wordt verzwegen.
- **Waarom is `virtual` nodig?**: zonder `virtual` valt polymorfisme stil bij niet-virtuele methoden. In dit hoofdstuk is *het hele punt* van virtual nu pas zichtbaar; toch wordt dit niet expliciet gemaakt.
- **Subtype- vs. ad-hoc- vs. parametric-polymorfisme**: één voetnoot ("er bestaan ook andere vormen van polymorfisme zoals overloading en generics, zie appendix") plaatst de student in een groter kader.
- **Cross-reference naar [content/18_IsAs/](../18_IsAs/)**: nergens wordt verteld dat upcast omkeerbaar is via `is`/`as`. Dat is de natuurlijke volgende stap.
- **Polymorfisme breekt bij `new` (hiding)**: indien `new` keyword in H13 wordt toegevoegd (zie review daar), is dit hét hoofdstuk om te tonen dat polymorfisme dan niet werkt zoals verwacht.

## Concrete suggesties

1. Hernoem `polypraktijd.md` naar `polypraktijk.md` en pas de verwijzing in `_quarto.yml` aan.
2. Voeg in de Pong-paragraaf op regel 101-118 *één* concrete subklasse-implementatie toe (bijvoorbeeld `InstabielBalletje`) zodat studenten de syntax niet hoeven te raden.
3. Vul de `MinisterBZ` en `MinisterVanEconomie` op regel 85-86 in [polypraktijd.md](polypraktijd.md) aan met een minimale `override` van `Adviseer`, anders compileert het voorbeeld niet.
4. Voeg een korte sectie "late binding" of "dynamic dispatch" toe aan het einde van [11_polymo_intro.MD](11_polymo_intro.MD), met als kernzin: "C# kijkt op runtime naar het echte object, niet naar het type van de variabele".
5. Introduceer **downcasting** als concept op het einde van [11_polymo_intro.MD](11_polymo_intro.MD) met expliciete forward-link naar het `is`/`as`-hoofdstuk.
6. Voeg een mini-callout toe over Liskov: "een `Paard` moet zich kunnen gedragen als een `Dier` zonder vreemde verrassingen — dit principe heet *Liskov substitution*".
7. Vermeld in een voetnoot de andere soorten polymorfisme (overloading uit H8, generics uit appendix).

---

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
