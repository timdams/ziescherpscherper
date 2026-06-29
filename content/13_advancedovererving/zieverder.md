## Zie verder

### Even terugblikken

In dit hoofdstuk ontdekte je dat elke klasse in C# uiteindelijk overerft van `System.Object`. Daardoor heeft elk object al vier ingebouwde methoden, waarvan er drie `virtual` zijn en dus door jou aangepast kunnen worden. Daarnaast leerde je abstracte klassen kennen: parent-klassen waarvan je geen instanties kan maken, maar die wel gedeelde code en verplichte "gaten" voor de child-klassen kunnen bevatten.

De kern op een rij:

- Alle klassen stammen af van `System.Object`; ook ingebouwde types en zelfs `int` en `bool`.
- `ToString()`, `Equals()` en `GetHashCode()` zijn `virtual` en kan je overriden; `GetType()` niet, want die moet altijd het echte runtime-type teruggeven.
- Override je `Equals`, dan moet je ook `GetHashCode` overriden (gebruik `HashCode.Combine(...)`), anders krijg je rare bugs als je het object als sleutel in een `Dictionary` of `HashSet` gebruikt.
- Een `abstract` klasse kan je niet instantiëren; een `abstract` methode heeft geen body en de child-klasse *moet* ze overriden.
- `abstract` en `sealed` zijn elkaars tegenpolen: bij `abstract` moet je overerven, bij `sealed` mag je net niet overerven.

:::{.callout-warning}
## Valkuilen
- Override je `Equals` zonder `null`- of type-controle en cast je hard met `(Student)o`, dan crasht je code op een `null` of een verkeerd type. Gebruik `if (o is not Student temp) return false;`.
- Een abstracte property zoals `public abstract int MaxLeeftijd { get; }` is géén auto-property: er zit geen verborgen instantievariabele achter, de child moet de implementatie zelf voorzien.
:::



### In andere talen

#### Één oer-klasse

Dit is geen typisch C#-trucje: ook **Java** kent precies dezelfde oer-klasse, daar gewoon `Object` genoemd. Elke klasse erft er impliciet van, en je krijgt er eveneens methoden zoals `toString()`, `equals()` en `hashCode()` bovenop:

```java
class Student {
    // erft automatisch van java.lang.Object
}

Student stud = new Student();
System.out.println(stud.getClass().getName()); // Student
```

Heel gelijkaardig dus: één gemeenschappelijke basisklasse waar alles van afstamt. Ook Python doet dit met `object`.

#### Abstract zonder keyword

**C++** kent het keyword `abstract` niet. Toch bestaat exact hetzelfde idee daar onder een andere naam: een "pure virtual" methode. Je zet `= 0` achter de signatuur, en zo'n klasse kan je niet instantiëren:

```cpp
class Dier {
public:
    virtual std::string MaakGeluid() = 0; // pure virtual: geen body
};

class Paard : public Dier {
public:
    std::string MaakGeluid() override { return "Hinnikhinnik"; }
};
```

Het is hetzelfde concept: een klasse met een gat dat de child moet invullen. Python doet dit met de `ABC`-module en `@abstractmethod`, dichter bij de C#-aanpak.

### Zoek de fout

Onderstaande C#-code wil twee studenten vergelijken op hun naam. De `Equals`-override doet z'n werk, maar bij het gebruik van `Student`-objecten als sleutel in een `Dictionary` of `HashSet` lopen dingen mis. Wat ontbreekt er?

```csharp
internal class Student
{
    public string Voornaam { get; set; }
    public int Geboortejaar { get; set; }

    public override bool Equals(object o)
    {
        if (o is not Student temp)
            return false;
        return Geboortejaar == temp.Geboortejaar && Voornaam == temp.Voornaam;
    }
}
```

:::{.callout-note collapse="true"}
## Antwoord
Wie `Equals` override, moet ook `GetHashCode` override. Twee gelijke objecten horen dezelfde hashcode terug te geven, en daar rekenen `Dictionary` en `HashSet` op. Voeg toe:

```java
public override int GetHashCode()
{
    return HashCode.Combine(Voornaam, Geboortejaar);
}
```
:::
