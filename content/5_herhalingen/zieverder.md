## Zie verder: andere talen

### Do-while bestaat niet overal

De `do while` ken je terug in **C**, **C++**, **Java** en **JavaScript**, telkens met diezelfde "test-achteraan"-structuur. **Python** daarentegen heeft helemaal geen do-while. Wil je daar iets dat minstens een keer draait, dan bootst men dat na met een `while True` plus een `break`:

```python
while True:
    keuze = input("Geef uw keuze in: a, b of c ")
    if keuze in ("a", "b", "c"):
        break
```

Dat is meteen een mooi voorbeeld van wat je hierboven net leert: in Python ben je vaak verplicht om `break` te gebruiken, terwijl je in C# de stopconditie netjes achteraan de `do while` kan zetten.

### De for-loop elders

Deze drie-delige for-syntax (`setup; finish test; update`) is geen C#-uitvinding: ze komt rechtstreeks uit **C** en is daarna bijna letterlijk overgenomen door **C++**, **Java** en **JavaScript**. Vergelijk maar met Java:

```java
for (int i = 0; i < 11; i += 2) {
    System.out.println(i);
}
```

Op de manier van afdrukken na is dit identiek aan C#. Ken je de for-loop hier, dan kan je ze in al die talen meteen lezen.

**Python** breekt volledig met die traditie. Daar bestaat geen teller-met-conditie-for; je loopt altijd *over* iets. Wil je tellen, dan vraag je een reeks getallen op met `range`:

```python
for i in range(0, 11, 2):   # van 0 tot (niet incl.) 11, stap 2
    print(i)
```

Geen losse setup, conditie en update dus: Python verstopt die in `range`. Veel beknopter, maar het werkt enkel als je vooraf weet over welke reeks je loopt.
