# Missie 2

## Code met uitleg

[De oplossing wordt hier stap voor stap besproken](https://ap.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=736abb9f-5971-4920-a031-abad00ca02bc)

## Code

### Main

```java
List<Gebouw> enclave = new List<Gebouw>();
enclave.Add(new Hospitaal("Sint Vincentius", 4, 5));
enclave.Add(new Woonst("Tims shack", 1, 1));
enclave.Add(new Generator("batteryshed 1", 1, 2));

foreach (var gebouw in enclave)
{
    gebouw.PrintGebouw();
}

Console.SetCursorPosition(1, 20);
```

### Gebouw

```java
abstract class Gebouw
{
    public Gebouw(string naamin, int xin, int yin)
    {
        Naam = naamin;
        X = xin;
        Y = yin;
    }
    public string Naam { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
    public abstract void PrintGebouw();

    public override string ToString()
    {
        return $"{Naam} (locatie: {X},{Y})";
    }
}
```
