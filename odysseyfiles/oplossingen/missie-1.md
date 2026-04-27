# Missie 1

<!-- TODO: link naar video-uitleg toevoegen -->

::: {.callout-warning}
Het gedeelte met de Dictionary wordt niet besproken in de videoclip. De oplossing hiervan staat wel hieronder.
:::

## Code

### Main

```csharp
Dictionary<string, Zendstation> stationsDB = new Dictionary<string, Zendstation>();

while (true)
{
    Console.WriteLine("Wat wil je doen?");
    Console.WriteLine("1. Stations tonen");
    Console.WriteLine("2. Station bijmaken");
    Console.WriteLine("3. Station probes laten maken");
    int keuze = Convert.ToInt32(Console.ReadLine());
    switch (keuze)
    {
        case 1:
            foreach (var station in stationsDB)
            {
                Console.WriteLine(station.Key);
            }
            break;
        case 2:
            Console.WriteLine("Waar wil je dit bouwen?");
            string waar = Console.ReadLine();
            if (stationsDB.ContainsKey(waar))
                Console.WriteLine("Die locatie heeft reeds een station");
            else
                stationsDB.Add(waar, new Zendstation());
                Console.WriteLine("Gebouwd!");
            break;
        case 3:
            Console.WriteLine("Welke locatie moet probes maken?");
            string waarv = Console.ReadLine();
            if (stationsDB.ContainsKey(waarv))
            {
                Probe gemaakt = stationsDB[waarv].GeefProbe();
                Console.WriteLine("Probe gemaakt");
            }
            else
                Console.WriteLine("Die locatie heeft geen zendstation");
            break;
        default:
            Console.WriteLine("Onbekend getal");
            break;
    }
}
```

### SlimmeProbe

```csharp
class SlimmeProbe : Probe
{
    public SlimmeProbe(string naamin) : base(naamin)
    {
    }

    int next = 0;
    public override int TryFrequentie()
    {
        int tosend = next;
        next = next + 10;

        if (next > 100)
        {
            int r = next % 10;
            next = r + 1;
        }

        return tosend;
    }
}
```

### InstabielArtefact

```csharp
class InstabielArtefact : Artefact
{
    static Random r = new Random();
    public override bool TryProbe(Probe probe)
    {
        bool result = base.TryProbe(probe);
        if (r.Next(0, 2) == 0)
        {
            VervaltTimer += 2;
        }
        return result;
    }
}
```
