Volgende toffe voorbeelden komen van deze [website](https://www.michalbialecki.com/2018/05/25/how-to-make-you-console-app-look-cool/)


### Updating percentage

```java
static void Main(string[] args)
{
    Console.WriteLine("Hello World!");
    Console.ReadKey();

    ShowSimplePercentage();

    Console.ReadKey();
}

static void ShowSimplePercentage()
{
    for (int i = 0; i <= 100; i++)
    {
        Console.Write($"\rProgress: {i}%   ");
        Thread.Sleep(25);
    }

    Console.Write("\rDone!          ");
}
```

### Spinner

```java
static void ShowSpinner()
{
    var counter = 0;
    for (int i = 0; i < 50; i++)
    {
        switch (counter % 4)
        {
            case 0: Console.Write("/"); break;
            case 1: Console.Write("-"); break;
            case 2: Console.Write("\\"); break;
            case 3: Console.Write("|"); break;
        }
        Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
        counter++;
        System.Threading.Thread.Sleep(100);
    }
}
```

### Desk toy

```java
static void MultiLineAnimation()
{
    var counter = 0;
    for (int i = 0; i < 30; i++)
    {
        Console.Clear();

        switch (counter % 4)
        {
            case 0: {
                    Console.WriteLine("╔════╤╤╤╤════╗");
                    Console.WriteLine("║    │││ \\   ║");
                    Console.WriteLine("║    │││  O  ║");
                    Console.WriteLine("║    OOO     ║");
                    break;
                };
            case 1:
                {
                    Console.WriteLine("╔════╤╤╤╤════╗");
                    Console.WriteLine("║    ││││    ║");
                    Console.WriteLine("║    ││││    ║");
                    Console.WriteLine("║    OOOO    ║");
                    break;
                };
            case 2:
                {
                    Console.WriteLine("╔════╤╤╤╤════╗");
                    Console.WriteLine("║   / │││    ║");
                    Console.WriteLine("║  O  │││    ║");
                    Console.WriteLine("║     OOO    ║");
                    break;
                };
            case 3:
                {
                    Console.WriteLine("╔════╤╤╤╤════╗");
                    Console.WriteLine("║    ││││    ║");
                    Console.WriteLine("║    ││││    ║");
                    Console.WriteLine("║    OOOO    ║");
                    break;
                };
        }
            
        counter++;
        System.Threading.Thread.Sleep(200);
    }
}
```

### Treintje

```java
static void ColorfulAnimation()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 30; j++)
        {
            Console.Clear();

            // steam
            Console.Write("       . . . . o o o o o o");
            for (int s = 0; s < j / 2; s++)
            {
                Console.Write(" o");
            }
            Console.WriteLine();

            var margin = "".PadLeft(j);
            Console.WriteLine(margin + "                _____      o");
            Console.WriteLine(margin + "       ____====  ]OO|_n_n__][.");
            Console.WriteLine(margin + "      [________]_|__|________)< ");
            Console.WriteLine(margin + "       oo    oo  'oo OOOO-| oo\\_");
            Console.WriteLine("   +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+");

            System.Threading.Thread.Sleep(200);
        }
    }
}
```