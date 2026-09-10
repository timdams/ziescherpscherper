<!-- \backmatter -->

# Appendix: Handig om weten

## Visual Studio snippets

Bepaalde code zal je vaak opnieuw schrijven. Er zitten in VS tal van shortcuts om deze typische lijnen code sneller te schrijven. Schrijf een van volgende stukken code en druk dan 2x op de [tab]-toets:

* ``cw`` : schrijft ``Console.WriteLine()``;
* ``for``
* ``foreach``
* ``while``
* ``dowhile``
* ``switch``
* ``///``: automatisch methode commentaar blok
* ``propfull``: full property 
* ``prop``: auto-property
* ``ctor``: constructor
* ``try``: geeft een try-catch blok

## Wachten op één toets

``Console.ReadLine()`` wacht tot de gebruiker enter duwt. Wil je enkel dat hij *een* toets indrukt, bijvoorbeeld om beeld per beeld door een simulatie te stappen, dan bestaat daarvoor ``Console.ReadKey()``:

```java
Console.WriteLine("Druk een toets voor het volgende beeld...");
Console.ReadKey();
```

Je hoeft er niets mee te doen, net zoals bij een lege ``ReadLine``. Wil je toch weten welke toets het was, dan geeft de methode dat terug.






