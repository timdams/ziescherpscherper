## Zie verder: andere talen

### Interfaces elders

**Java** en **TypeScript** hebben net als C# een echt `interface`-keyword dat bijna identiek werkt. Een TypeScript-interface ziet er bijvoorbeeld zo uit:

```typescript
interface ISuperHeld {
    schietLasers(): void;
    power: number;
}
```

**Python** pakt het radicaal anders aan met *duck typing*: "if it walks like a duck and quacks like a duck, it's a duck". Daar bestaat geen verplichte interface; zolang een object toevallig de juiste methoden heeft, mag je het gebruiken. Python dwingt dus niets af op voorhand, terwijl C# de compiler laat controleren dat je je belofte ook nakomt.

```python
class Zorro:
    def schiet_lasers(self):   # geen interface nodig, gewoon de methode hebben volstaat
        print("pewpew")
```

In **C** ten slotte bestaat het hele begrip interface niet. C# zit dus aan de strenge, gecontroleerde kant: een interface is een belofte die de taal hard afdwingt.

### Waarom maar één parent?

Dat je meerdere interfaces maar slechts één klasse mag overerven, is precies de oplossing die **Java** ook koos. Beide talen verbieden bewust *meervoudige overerving* van klassen, en gebruiken interfaces als veilig alternatief.

**C++** doet dat net niet: daar mag een klasse wél van meerdere klassen tegelijk overerven.

```cpp
class Zorro : public Man, public SuperHeld { };  // mag in C++
```

Krachtig, maar het leidt tot het beruchte *diamond problem*: erven twee parents dezelfde methode, dan weet de compiler niet meer welke hij moet kiezen. Door enkel meervoudige *interfaces* toe te laten (interfaces hebben immers geen eigen code), ontwijken C# en Java dat probleem volledig.
