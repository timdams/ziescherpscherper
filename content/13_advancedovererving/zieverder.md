## Zie verder: andere talen

### Één oer-klasse

Dit is geen typisch C#-trucje: ook **Java** kent precies dezelfde oer-klasse, daar gewoon ``Object`` genoemd. Elke klasse erft er impliciet van, en je krijgt er eveneens methoden zoals ``toString()``, ``equals()`` en ``hashCode()`` bovenop:

```java
class Student {
    // erft automatisch van java.lang.Object
}

Student stud = new Student();
System.out.println(stud.getClass().getName()); // Student
```

Heel gelijkaardig dus: één gemeenschappelijke basisklasse waar alles van afstamt. Ook **Python** doet dit met ``object``.

### Abstract zonder keyword

**C++** kent het keyword ``abstract`` niet. Toch bestaat exact hetzelfde idee daar onder een andere naam: een "pure virtual" methode. Je zet ``= 0`` achter de signatuur, en zo'n klasse kan je niet instantiëren:

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

Het is hetzelfde concept: een klasse met een gat dat de child moet invullen. **Python** doet dit met de ``ABC``-module en ``@abstractmethod``, dichter bij de C#-aanpak.

### Eigen exceptions in Python

In **Python** werkt dit verrassend gelijkaardig: ook daar maak je een eigen uitzondering door over te erven van ``Exception``, en gooi je ze op met ``raise`` (het equivalent van ``throw``):

```python
class Timception(Exception):
    pass

def tims_methode():
    raise Timception("Een wilde exception verschijnt!")

try:
    tims_methode()
except Timception as e:
    print(e)
```

Net als in C# maak je een eigen klasse die erft van de algemene ``Exception``-basisklasse, en die je elders kan opvangen.
