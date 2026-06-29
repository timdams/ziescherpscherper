## Zie verder

### Even terugblikken

>![](../assets/zieverder.png)In dit hoofdstuk leerde je hoe je met overerving een child-klasse maakt die alles van z'n parent-klasse erft en daar bovenop z'n eigen specialisatie krijgt. Je herkent overerving aan de "is een"-relatie, en je zag hoe je de werking van een parent kan aanpassen met `virtual` en `override`, en hoe een constructor-keten van boven naar beneden wordt afgewerkt.

De kern op een rij:

- Een "is een"-relatie (een `Paard` is een `Dier`) is het signaal dat overerving mogelijk is; bij een "heeft een"-relatie gaat het om associatie.
- Een child-klasse erft alles, maar `private` leden van de parent blijven onbereikbaar; gebruik `protected` als de child er toch aan moet.
- Een methode mag pas overschreven worden als de parent ze `virtual` zet en de child `override` schrijft.
- Met `base` roep je expliciet de parent-versie van een methode of constructor aan.
- Bij het aanmaken van een child-object draait eerst de constructor van de verste voorouder, daarna werk je de keten naar beneden af.

:::{.callout-warning}
## Valkuilen
- Schrijf je in de child gewoon `public void Vlieg()` zonder `override`, dan compileert het wel, maar krijg je *hiding* in plaats van *overriding*: via een parent-referentie draait dan toch de oude parent-versie.
- Heeft de parent enkel een overloaded constructor, dan bestaat er geen impliciete `base()` meer. Roep je `new VeldArts()` aan zonder zelf een `base(...)` te voorzien, dan compileert je code niet.
:::


### In andere talen

#### Overervings-syntax

Het idee van overerving bestaat in zowat elke OO-taal, alleen de notatie verschilt. In **Python** zet je de parent-klasse tussen haakjes achter de naam:

```python
class Dier:
    def eet(self):
        pass

class Paard(Dier):
    pass
```

Java gebruikt dan weer het woord `extends` (`class Paard extends Dier`) en C++ schrijft `class Paard : public Dier`.

#### Virtual en override

C# is hier streng: een methode mag pas overschreven worden als de parent ze expliciet `virtual` zet, en de child moet expliciet `override` schrijven. In **Python** is daar niets van: elke methode is automatisch overschrijfbaar, je herschrijft ze gewoon in de child-klasse:

```python
class Vliegtuig:
    def vlieg(self):
        print("Het vliegtuig vliegt door de wolken.")

class Raket(Vliegtuig):
    def vlieg(self):           # geen virtual, geen override nodig
        print("De raket verdwijnt in de ruimte.")
```

Ook Java maakt elke (niet-`final`) methode standaard overschrijfbaar. C# doet net het omgekeerde: niets mag overschreven worden tenzij je het uitdrukkelijk toelaat.

#### Base versus super

C# noemt de verwijzing naar de parent-klasse `base`. **Python** en Java noemen dat net `super`. In Python roep je de parent-versie zo aan:

```python
class Frituur(Restaurant):
    def poets_alles(self):
        super().poets_alles()   # in C#: base.PoetsAlles()
        self.kosten += 500
```

In beide gevallen voer je eerst de implementatie van de parent uit en bouw je daarop verder.

### Zoek de fout

Onderstaande C#-code wil de poetskost van een frituur correct berekenen. Een `Restaurant` poetsen kost 1000, een `Frituur` heeft daarbovenop 500 ontsmetting nodig. Toch komt er een fout uit. Wat loopt er mis?

```csharp
internal class Restaurant
{
    protected int kosten = 0;
    public void PoetsAlles()
    {
        kosten += 1000;
    }
}

internal class Frituur : Restaurant
{
    public override void PoetsAlles()
    {
        base.PoetsAlles();
        kosten += 500;
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
`PoetsAlles` in `Restaurant` staat niet als `virtual` gemarkeerd, dus de `override` in `Frituur` geeft een compileerfout. Zet `public virtual void PoetsAlles()` in `Restaurant`, dan mag de child de methode overschrijven.
:::
