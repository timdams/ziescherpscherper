## Nested loops

Wanneer we 1 of meerdere loops in een andere loop plaatsen dan spreken we over **geneste loops**. 
Geneste loops komen vaak voor, maar zijn wel een ander paar mouwen wanneer je deze zaken wilt debuggen en correct schrijven.


![Voorbeeld van geneste loops.](../assets/3_loops/nesting.png)<!--{width=70%}-->

We spreken steeds over de **outer loop** als de omhullende of "grootste" loop. Waarbij de binnenste loop de **inner loop** is. 


Volgende code toont bijvoorbeeld 2 loops die genest werden:

```java
int tellerA = 0;
int tellerB = 0;

while(tellerA < 3 ) //outer loop
{
    tellerA++;
    tellerB = 0;
    while(tellerB < 5)
    {
        tellerB++;
        Console.WriteLine($"A:{tellerA}, B: {tellerB}");
    }
}
```

<!-- \newpage -->



De uitvoer hiervan zal als volgt zijn:

```text
A:1,  B: 1
A:1,  B: 2
A:1,  B: 3
A:1,  B: 4
A:1,  B: 5
A:2,  B: 1
A:2,  B: 2
A:2,  B: 3
A:2,  B: 4
A:2,  B: 5
A:3,  B: 1
A:3,  B: 2
A:3,  B: 3
A:3,  B: 4
A:3,  B: 5
```

Merk het 'ritme' op in de uitvoer. De linkse teller gaat een pak trager dan de rechtse.

:::{.callout-important}
**Waarom moet ``tellerB = 0;`` opnieuw gezet worden (lijn 21)?** Bij elke nieuwe iteratie van de outer loop willen we dat de inner loop weer vanaf 0 begint. ``tellerB`` werd in de vorige ronde immers tot 5 opgehoogd. Zouden we deze reset vergeten, dan blijft ``tellerB`` op 5 staan, faalt de test ``tellerB < 5`` meteen, en loopt de inner loop in totaal maar 1 keer. De reset zorgt er dus voor dat de binnenste loop telkens "opnieuw vol" doorloopt.
:::

### Geneste loops tellen

Om te tellen hoe vaak de *inner* code zal uitgevoerd worden dien je te weten hoe vaak iedere loop afzonderlijk wordt uitgevoerd. Vervolgens vermenigvuldig je al deze getallen met elkaar.

Een voorbeeld: Hoe vaak zal het woord "Hallo" op het scherm verschijnen bij volgende code?

```java
for (int i = 0; i < 10; i++)
{
    for (int j = 0; j < 5; j++)
    {
        Console.WriteLine("Hallo");
    }
}
```

De outer loop wordt 10 keer uitgevoerd (waarbij ``i`` de waarden 0 tot en met 9 aanneemt). De inner loop wordt bij elke iteratie van de outer loop 5 keer uitgevoerd (waarbij ``j`` de waarden 0 tot en met 4 aanneemt). In totaal zal dus 50 keer "Hallo" op het scherm verschijnen (5x10).

:::{.callout-important}
Let er op dat ``break`` je enkel uit de **huidige** loop zal halen. Indien je dit dus gebruikt in de inner loop dan zal de outer loop nog steeds voortgaan. Wil je in één keer uit *alle* geneste loops springen, dan heb je een andere aanpak nodig (bijvoorbeeld een booleaanse vlag die je in de outer-conditie test). Ga dus zéér bewust om met ``break`` in geneste loops, en gebruik het enkel als het je code echt leesbaarder maakt.
:::

<!-- TODO ed.5 (review): sectie/voorbeeld toevoegen voor "break uit nested loops" (booleaanse vlag of helper-aanpak). Nu wordt enkel gezegd dat break uit de huidige loop haalt, zonder oplossing voor wie uit alle loops wil. -->
<!-- TODO ed.5 (review): Test jezelf met loop-trace-oefeningen toevoegen (bv. "hoe vaak wordt 'X' geprint?"). -->
<!-- TODO ed.5 (review): flowchart voor nesting toevoegen; net hier maakt visualisatie het meeste verschil. -->







