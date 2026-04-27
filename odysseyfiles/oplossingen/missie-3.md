# Missie 3

<!-- TODO: link naar video-uitleg toevoegen -->

### Station

```csharp
class Station
{
    protected static Random r = new Random();

    private MedBay medBay;
    private Reactor reactor;
    protected List<Kwartier> kwartieren = new List<Kwartier>();

    public Station()
    {
        medBay = new MedBay("startmedbay", r.Next(1, Console.WindowWidth), r.Next(1, Console.WindowHeight));
        reactor = new Reactor("reactor1", r.Next(1, Console.WindowWidth), r.Next(1, Console.WindowHeight));
        for (int i = 0; i < 3; i++)
        {
            kwartieren.Add(new Kwartier(r.Next(1, Console.WindowWidth), r.Next(1, Console.WindowHeight)));
        }
    }

    public virtual void BouwKwartier()
    {
        int xpoging = 0;
        int ypoging = 0;
        do
        {
            xpoging = r.Next(1, Console.WindowWidth);
            ypoging = r.Next(1, Console.WindowHeight);
        } while (!IsLeeg(xpoging, ypoging));

        kwartieren.Add(new Kwartier(xpoging, ypoging));
    }

    public virtual void ToonStation()
    {
        reactor?.PrintModule();
        medBay?.PrintModule();
        foreach (var kwartier in kwartieren)
        {
            kwartier.PrintModule();
        }
    }

    private bool IsLeeg(int x, int y)
    {
        if (medBay.X == x && medBay.Y == y)
            return false;
        if (reactor.X == x && reactor.Y == y)
            return false;
        foreach (var kwartier in kwartieren)
        {
            if (kwartier.X == x && kwartier.Y == y)
                return false;
        }
        return true;
    }
}
```

### Hoofdstation

```csharp
class Hoofdstation : Station
{
    private FusieReactor fusieReactor;
    private MedBay extraMedBay;
    private List<Woonblok> woonblokken = new List<Woonblok>();

    public override void BouwKwartier()
    {
        base.BouwKwartier();
        if (kwartieren.Count % 3 == 0)
        {
            for (int i = 0; i < 3; i++)
            {
                kwartieren.RemoveAt(0);
            }
            woonblokken.Add(new Woonblok(r.Next(1, Console.WindowWidth), r.Next(1, Console.WindowHeight)));
        }
    }

    public override void ToonStation()
    {
        base.ToonStation();
        extraMedBay?.PrintModule();
        fusieReactor?.PrintModule();
        foreach (var woonblok in woonblokken)
        {
            woonblok.PrintModule();
        }
    }
}
```
