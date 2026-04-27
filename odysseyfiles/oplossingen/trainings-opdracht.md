# Trainings opdracht

<!-- TODO: link naar video-uitleg toevoegen -->

## Program.cs

```csharp
Artefact a = new Artefact();

List<Probe> probes = new List<Probe>();
for (int i = 0; i < 5; i++)
{
    probes.Add(new Probe(i.ToString()));
}

Probe theKey = null;
bool signaalGevonden = false;
while (a.VervaltTimer > 0 && signaalGevonden == false)
{
    foreach (Probe probe in probes)
    {
        if (a.TryProbe(probe) == true)
        {
            theKey = probe;
            signaalGevonden = true;
            break;
        }
    }
}

if (signaalGevonden == true)
{
    //Fase 2
    theKey.ToonInfo();
    Zendstation.BewaarFrequentie(theKey.Frequentie);

    List<Zendstation> stations = new List<Zendstation>();
    for (int i = 0; i < 5; i++)
    {
        stations.Add(new Zendstation());
    }

    List<Probe> alleProbes = new List<Probe>();
    foreach (var station in stations)
    {
        for (int i = 0; i < 7; i++)
        {
            alleProbes.Add(station.GeefProbe());
        }
    }

    for (int i = 0; i < alleProbes.Count; i++)
    {
        Console.Write(i);
        alleProbes[i].ToonInfo();
    }
}
else
{
    Console.WriteLine("Artefact verloren.");
}
```

## Probe

```csharp
class Probe
{
    public string Naam { get; private set; }
    public Probe(string naamin)
    {
        Naam = naamin;
    }
    public Probe(string naamin, int freq)
    {
        Frequentie = freq;
        Naam = naamin;
    }

    static Random r = new Random();
    public int Frequentie { get; set; } = -1;
    public virtual int TryFrequentie()
    {
        if (Frequentie != -1)
        {
            return Frequentie;
        }
        return r.Next(1, 100);
    }
    public void ToonInfo()
    {
        Console.WriteLine($"{Naam}, Frequentie is: {Frequentie}");
    }
}
```

## Artefact

```csharp
class Artefact
{
    public string Naam { get; private set; }
    private int vervaltTimer;

    public int VervaltTimer
    {
        get { return vervaltTimer; }
        set
        {
            if (value <= 0)
            {
                Console.WriteLine("Artefact verloren");
            }
            vervaltTimer = value;
        }
    }

    private int signaalcode;
    static Random r = new Random();
    public Artefact()
    {
        VervaltTimer = r.Next(100, 200);
        signaalcode = r.Next(0, 99);

        for (int i = 0; i < 3; i++)
        {
            Naam += (char)r.Next('a', 'z' + 1);
        }
        Naam += r.Next(1, 100);
    }

    public virtual bool TryProbe(Probe probe)
    {
        var ftest = probe.TryFrequentie();
        if (ftest == signaalcode)
        {
            probe.Frequentie = ftest;
            return true;
        }
        VervaltTimer--;
        return false;
    }
}
```

## Zendstation

```csharp
class Zendstation
{
    public static int Frequentie { get; set; } = -1;
    public static void BewaarFrequentie(int codein)
    {
        Frequentie = codein;
    }

    public Probe GeefProbe()
    {
        if (Frequentie == -1) return null;
        return new Probe("THEKEY", Frequentie);
    }
}
```
