## Is, as en polymorfisme: een krachtige bende

Dankzij polymorfisme hebben we nu met de ``is`` en ``as`` keywords handige hulpmiddelen om meer "generieke" methoden te schrijven. Herinner je je nog de ``Equals`` methode die we schreven om 2 studenten te vergelijken toen we leerden dat alle klassen van ``System.Object`` overerfden? Laten we deze code er nog eens bijnemen en verbeteren:

```java
//In de Student klasse
public override bool Equals(Object o)
{  
    Student temp = (Student)o; 
    return (Geboortejaar == temp.Geboortejaar && Voornaam == temp.Voornaam);
}
```

De eerste lijn waarin we ``o`` casten naar een student kan natuurlijk mislukken. Het is dan ook veiliger om eerst te controleren of we wel mogen casten, voor we het effectief doen. Hierdoor schrijven we een minder foutgevoelige methode:

```java
//In de Student klasse
public override bool Equals(Object o)
{  
    if(o is Student)
    { 
        Student temp = o as Student; 
        return (Geboortejaar == temp.Geboortejaar && Voornaam == temp.Voornaam);
    }
    return false;
}
```

Of we kunnen ook het volgende doen:
```java
//In de Student klasse
public override bool Equals(object o)
{  
    Student temp = o as Student; 
    if(temp != null)
    { 
        return (Geboortejaar == temp.Geboortejaar && Voornaam == temp.Voornaam);
    }
    return false;
}
```
Beide zijn geldige oplossingen. Met pattern matching (zie eerder) kan dit nóg korter, en dat is de manier die je vandaag het vaakst zal zien:

```java
//In de Student klasse
public override bool Equals(object o)
{  
    if(o is Student temp)
        return (Geboortejaar == temp.Geboortejaar && Voornaam == temp.Voornaam);
    return false;
}
```

### Vergeet ``GetHashCode`` niet

:::{.callout-important}
**Wie ``Equals`` overridet, moet ook ``GetHashCode`` overriden.** De afspraak is dat twee objecten die "gelijk" zijn volgens jouw ``Equals``, ook dezelfde hashcode teruggeven. Doe je dit niet, dan werken je objecten niet correct als key in een ``Dictionary`` of in een ``HashSet`` (elementen lijken dan te "verdwijnen"). Gelukkig is dat eenvoudig met de ingebouwde ``HashCode.Combine``, waaraan je dezelfde instantievariabelen meegeeft als in ``Equals``:

```java
public override int GetHashCode()
{
    return HashCode.Combine(Voornaam, Geboortejaar);
}
```
:::

### ``==`` of ``.Equals()``?

Waarom zou je ``Equals`` eigenlijk overriden? Het verschil zit hem in *waarop* je vergelijkt. Standaard vergelijkt ``==`` voor objecten de **referenties**: twee aparte objecten met exact dezelfde inhoud zijn voor ``==`` dus *niet* gelijk (ze staan op een andere plek in de heap). Door ``Equals`` te overriden bepaal jij zelf wanneer twee objecten gelijk zijn op basis van hun **inhoud** (hier: dezelfde ``Voornaam`` en ``Geboortejaar``).

:::{.callout-tip}
Sinds C# 9 bestaan er **``record``**-types die dit hele "vergelijken op inhoud"-verhaal automatisch voor je regelen: één regel zoals ``public record Student(string Voornaam, int Geboortejaar);`` genereert zelf een correcte ``Equals``, ``GetHashCode`` én ``ToString``. We schrijven het hier nog met de hand zodat je begrijpt wat er onder de motorkap gebeurt, maar weet alvast dat het korter kan.
:::

:::{.callout-tip}
De ``is`` en ``as`` keywords laten toe om meer dynamische code te schrijven. Mogelijk weet je niet op voorhand wat voor datatype je code zal moeten verwerken en wordt polymorfisme je oplossing. Maar dan? Dan komen ``is`` en ``as`` to the rescue!

Je met polymorfisme gevulde lijst van objecten van allerhande typen wordt nu beheersbaarder. Je kan nu met ``is`` een element bevragen of het van een bepaald type is. Vervolgens kan je met ``as`` het element tijdelijk 'omzetten' naar z'n effectieve type. Bijgevolg kan dit element dan doen dan wanneer hij kan in de vermomming is van z'n eigen basistype.
:::

