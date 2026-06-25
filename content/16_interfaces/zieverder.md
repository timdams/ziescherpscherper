## Zie verder

### Even terugblikken

Een interface is een belofte: ze beschrijft welke publieke methoden en properties een klasse moet hebben, maar zegt niets over de code erachter. Zo kunnen ongerelateerde klassen toch met elkaar "praten", en kan een klasse meerdere interfaces tegelijk dragen, ook al mag ze maar van één klasse overerven. Je zag ook hoe .NET zelf interfaces gebruikt, bijvoorbeeld ``IComparable`` zodat ``Array.Sort`` jouw objecten kan sorteren.

De kern op een rij:

- Een interface bevat enkel signaturen, geen code en geen state (geen instantievariabelen, geen constructors).
- Een klasse die een interface "aanhangt" is verplicht alle leden ervan te implementeren, anders compileert ze niet.
- Een klasse kan meerdere interfaces hebben, maar maar van één klasse overerven. De klasse staat eerst, dan de interfaces: ``Batman : Man, ISuperHeld, ICoureur``.
- Met ``is`` kan je nagaan of een object een bepaalde interface heeft, handig in een lijst met een allegaartje aan objecten.

:::{.callout-warning}
## Valkuilen
- Een interface naam begint met een ``I`` en haar leden krijgen géén ``public`` of body: elke methode eindigt meteen met een puntkomma.
- Implementeer je een ingebouwde interface zoals ``IComparable``, schrijf die dan niet zelf opnieuw. Ze bestaat al in .NET; jij levert enkel de ``CompareTo``-implementatie.
:::

:::{.callout-tip}
## Tijd om te oefenen
De practica bij dit hoofdstuk staan [hier](https://apwt.gitbook.io/ziescherp-oefeningen/h17-interfaces-1/a_practica).
:::

### In andere talen

#### Interfaces elders

**Java** en **TypeScript** hebben net als C# een echt ``interface``-keyword dat bijna identiek werkt. Een TypeScript-interface ziet er bijvoorbeeld zo uit:

```typescript
interface ISuperHeld {
    schietLasers(): void;
    power: number;
}
```

Python pakt het anders aan met *duck typing*: "if it walks like a duck and quacks like a duck, it's a duck". Daar bestaat geen verplichte interface; zolang een object toevallig de juiste methoden heeft, mag je het gebruiken. Python dwingt dus niets af op voorhand, terwijl C# de compiler laat controleren dat je je belofte ook nakomt.

```python
class Zorro:
    def schiet_lasers(self):   # geen interface nodig, gewoon de methode hebben volstaat
        print("pewpew")
```

In **C** ten slotte bestaat het hele begrip interface niet.

#### Waarom maar één parent?

Dat je meerdere interfaces maar slechts één klasse mag overerven, is precies de oplossing die Java ook koos. Beide talen verbieden bewust *meervoudige overerving* van klassen, en gebruiken interfaces als veilig alternatief.

**C++** doet dat net niet: daar mag een klasse wél van meerdere klassen tegelijk overerven.

```cpp
class Zorro : public Man, public SuperHeld { };  // mag in C++
```

Krachtig, maar het leidt tot het beruchte *diamond problem*: erven twee parents dezelfde methode, dan weet de compiler niet meer welke hij moet kiezen. Door enkel meervoudige *interfaces* toe te laten (interfaces hebben immers geen eigen code), ontwijken C# en Java dat probleem.

### Zoek de fout

Onderstaande C#-klasse zou ``IComparable`` moeten implementeren zodat ``Array.Sort`` werkt, maar de compiler klaagt dat ``Land`` de interface niet volledig implementeert. Wat ontbreekt?

```csharp
internal class Land : IComparable
{
    public string Naam { get; set; }
    public int Oppervlakte { get; set; }

    public int Vergelijk(object obj)
    {
        Land temp = obj as Land;
        return Oppervlakte.CompareTo(temp.Oppervlakte);
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
De methode heet ``Vergelijk``, maar ``IComparable`` vereist exact de methode ``CompareTo(object obj)``. Een interface is een belofte op de letter: de naam (en signatuur) moet precies kloppen. Hernoem ``Vergelijk`` naar ``CompareTo`` en de klasse compileert weer.
:::
