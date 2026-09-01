## System.Array

Tot nu schreef je alles zelf: een loop om je array te tonen, en daarnet nog een loop om een array te kopiëren. Voor de klassiekers hoeft dat niet meer. C# levert met ``System.Array`` een reeks kant-en-klare methoden die je op eender welke array kan loslaten.

Let goed op hoe je ze oproept:

```java
Array.Sort(myColors);   //zo dus
//myColors.Sort();      //dit bestaat niet
```

Je roept de methode op ``Array`` op en geeft je eigen array als argument mee. En daar zit meteen de link met wat je net leerde over referenties: ``Array.Sort`` geeft niets terug. De methode krijgt de referentie naar jouw array en herschikt die array ter plekke. Na die ene regel is ``myColors`` zelf veranderd.

In wat volgt gebruik ik steeds dezelfde array:

```java
string[] myColors = { "red", "green", "yellow", "orange", "blue" };
```

### Sort: arrays sorteren

Om te sorteren roep je ``Sort()`` op en geef je de array mee die gesorteerd moet worden:

```java
Array.Sort(myColors);

for (int i = 0; i < myColors.Length; i++)
{
    Console.WriteLine(myColors[i]);
}
```

Op het scherm verschijnt:

```text
blue
green
orange
red
yellow
```

Bij een array van strings worden de elementen alfabetisch gerangschikt. Uiteraard werkt dit ook op arrays van andere datatypes. Zolang C# maar weet hoe dat type gesorteerd moet worden, zal dit werken. Getallen gaan van klein naar groot, tekst volgt de regels van het alfabet, enums volgen hun interne voorstelling, enz.

### Reverse: de volgorde omkeren

Met ``Array.Reverse()`` keer je de volgorde van de elementen om (het laatste element komt dus vooraan):

```java
Array.Reverse(myColors);
```

Onze array was net gesorteerd, dus nu staat er:

```text
yellow
red
orange
green
blue
```

Ook hier krijg je niets terug: de array zelf is aangepast. Wil je van groot naar klein sorteren, dan doe je dus een ``Sort()`` gevolgd door een ``Reverse()``.

### Clear: arrays leegmaken

``Array.Clear()`` zet elementen terug op hun standaardwaarde. Ik neem er even een array van getallen bij, want daar zie je het resultaat het duidelijkst:

```java
int[] scores = { 12, 8, 20, 15, 3 };
Array.Clear(scores, 0, scores.Length);
//scores bevat nu: 0 0 0 0 0
```

De tweede parameter geeft aan vanaf welke index moet leeggemaakt worden, de derde hoeveel elementen vanaf die index. Wil je enkel de eerste twee wissen:

```java
Array.Clear(scores, 0, 2);
//scores bevat nu: 0 0 20 15 3
```

De lengte van de array verandert niet, enkel de inhoud: ``scores.Length`` blijft 5. Op een array van strings werkt ``Clear`` ook, maar dan blijven de elementen helemaal leeg achter en verschijnt er gewoon niets op het scherm als je ze toont.

<!-- \newpage -->

### Copy: een echte kopie maken

In de vorige sectie kopieerde je een array met een eigen lus. Dat kan korter met ``Array.Copy()``, al vraagt die methode iets meer werk dan de vorige:

* er moet al een nieuwe array bestaan waar naartoe gekopieerd wordt
* je moet meegeven hoeveel elementen er gekopieerd moeten worden

Zo kopieer je alle elementen van ``myColors`` naar een nieuwe array ``copyColors``. Eerst de bron-array, dan de doel-array, dan het aantal elementen:

```java
string[] copyColors = new string[myColors.Length];
Array.Copy(myColors, copyColors, myColors.Length);
```

Willen we enkel de eerste twee elementen kopiëren, dan wordt dat:

```java
Array.Copy(myColors, copyColors, 2);
```

De overige plekken in ``copyColors`` blijven dan onaangeroerd. En let op het verschil met ``copyColors = myColors``: dat kopieert enkel de referentie, terwijl je hier twee aparte arrays in het geheugen krijgt. Pas je nadien ``copyColors[0]`` aan, dan blijft ``myColors`` ongemoeid.

:::{.callout-tip}
Er bestaan overloads waarmee je ook kiest *waar* je begint en waar het stuk in de doel-array terechtkomt. Volgende regel kopieert 2 elementen vanaf index 1 uit ``myColors`` naar index 3 van ``copyColors``:

```java
Array.Copy(myColors, 1, copyColors, 3, 2);
```
:::

![``Clear`` en ``Copy`` werken allebei met een startindex en een aantal elementen.](../assets/5_arrays/indexaantal.png)<!--{width=80%}-->

### IndexOf: waar staat een element?

De vorige methoden veranderden jouw array. ``Array.IndexOf`` laat de array met rust en geeft je een getal terug: de index van het element dat je zoekt. Je krijgt de index van het eerste voorkomen, of ``-1`` als het element er niet in zit:

```java
//myColors staat nu: yellow red orange green blue
int indexGreen = Array.IndexOf(myColors, "green"); //geeft 3
int indexZwart = Array.IndexOf(myColors, "black"); //geeft -1 (niet gevonden)
```

Die ``-1`` is een afspraak die je in heel wat code zal terugzien: een index kan nooit negatief zijn, dus is dat een veilige manier om "niet gevonden" te melden. Vergeet dus niet op ``-1`` te testen vooraleer je het resultaat als index gebruikt, anders vlieg je met ``myColors[-1]`` tegen een ``IndexOutOfRangeException`` aan.

``IndexOf`` is voor beginners bijna altijd de juiste keuze om iets in een array te zoeken. Intern overloopt de methode je array element per element, precies zoals je het zelf zou schrijven met een loop. En dat is meteen het onderwerp van de volgende sectie: zodra je niet naar één exacte waarde zoekt (het grootste getal, de eerste meting boven de 100) helpt geen enkele kant-en-klare methode je nog verder en schrijf je die loop zelf. Daar zie je ook hoe het zoeken sneller kan wanneer je array gesorteerd staat.
