# Missie 2

<!-- TODO: link naar video-uitleg toevoegen -->

## Code

### Main

```csharp
List<Module> station = new List<Module>();
station.Add(new MedBay("Sick Bay Alpha", 4, 5));
station.Add(new Kwartier("Crew Deck 1", 1, 1));
station.Add(new Reactor("Reactor Core", 1, 2));

foreach (var module in station)
{
    module.PrintModule();
}

Console.SetCursorPosition(1, 20);
```

### Module

```csharp
abstract class Module
{
    public Module(string naamin, int xin, int yin)
    {
        Naam = naamin;
        X = xin;
        Y = yin;
    }
    public string Naam { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
    public abstract void PrintModule();

    public override string ToString()
    {
        return $"{Naam} (locatie: {X},{Y})";
    }
}
```
