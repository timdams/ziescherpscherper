> Volgende opgave was de vaardigheidsproefopdracht voor inhaalexamen van dit vak (Programming Principles) in januari 2022

# ChemQuiz Inhaalvaardigheidsproef

## Introductie

Een chemieleerkracht wil een quiz-applicatie waarmee ze haar leerlingen kan ondervragen in hun kennis van de chemische elementen. 

## Werking

De applicatie bestaat uit 2 verschillende rondes waarin de leerling de namen, symbolen en atoomnummers van de chemische elementen moet raden.

Ronde 1: 10 willekeurige vragen om de kennis van de naam, symbool of atoomnummer te testen.
Ronde 2: sudden death ronde die enkel test naar de kennis van de symbolen en die eindigt van zodra de student 1 fout maakt.

### Miniles chemie

Bij deze opgave heb je volgende 2 arrays nodig:

```csharp
string[] elNamen = { "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson" };

string[] elSymbool = { "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og" };
```

De eerste array bevat de **naam** van het element, de tweede bevat het  **symbool**. Beide arrays zijn synchroon uiteraard: het symbool van het element met de naam Helium is "He".

Het atoomnummer van een element/symbool is de "index+1" van het element/symbool in de array. Het atoomnummer van Lithium is dus 3.

## Algemene opbouw hoofdprogramma

Het hoofdprogramma werkt als volgt

1. Eerst wordt aan de gebruiker gevraagd hoeveel vragen er in ronde 1 moeten gesteld worden (ga ervan uit dat de gebruiker altijd een positief getal invoert. Geen invoercontrole nodig met andere woorden).
2. Een loop wordt gestart die even vaak wordt uitgevoerd als dat er vragen dienen gesteld te worden (dit is ronde 1 die start).
3. In de loop wordt telkens de ``StelVraag``-methode (zie verder) aangeroepen. Het resultaat van deze methode, de score, wordt bijgeteld bij de totaalscore. 1 punt per juist anwoord. Er wordt een willekeurige vraagsoort als derde parameter meegeven.
4. De score van ronde 1 wordt getoond.
5. Ronde 2 wordt gestart door de ``SuddenDeathRonde``-methode aan te roepen. Het resultaat van deze methode is de score voor ronde 2.
6. De totaalscore van ronde 1 en ronde 2 opgeteld wordt getoond.
7. Het programma sluit af.

### StelVraag-methode

Deze methode aanvaardt 3 parameters:

* Een namenarray van strings, die de namen van de elementen zal bevatten.
* Een even lange andere symbolenarray van strings, die de respectievelijke symbolen zal bevatten
* Een enumtype genaamd ``VraagSoort`` waarmee kan aangegeven worden wat voor vraag in de methode moet gesteld worden (mogelijheden zijn: ZoekSymbool, ZoekAtoomNummer, ZoekNaam)

De methode stuurt een int terug, die de score voorstelt (0 indien fout, 1 indien juist) (*let op: we hanteren een int, ook al zijn er maar 2 mogelijke uitkomsten, we willen echter dat de applicatie in de toekomst ook met andere scores kan werken*)

Afhankelijk van de vraagtype zal de applicatie nu een vraag stellen. De vraag zal telkens een willekeurig element kiezen. De gebruiker moet (nog steeds in de methode) het juiste antwoord intypen dat dan zal gecontroleerd worden:

* ZoekSymbool: de applicatie toont een willekeurig element uit de namen array en vraagt het symbool (het toont ook het atoomnummer bij de vraagstelling). Indien  de gebruiker het juiste symbool geeft geeft de methode 1 terug, anders 0. Via de symbolenarray kan de applicatie controleren of dit klopt. Voorbeeld van de vraag: *"Wat is het symbool van Helium (atoomnummer 1)?"* Antwoord = H.
* ZoekAtoomNummer: de methode toont een element naam (uit de namen array) en wil weten wat het atoomnummer is (zijnde de index+1 van het element). Ook hier is de score het zelfde. Voorbeeld: *"Wat is het atoomnummer van Helium?"* Antwoord= 2.  
* ZoekNaam: in deze vraag wordt een willekeurig symbool gekozen uit de symbolenarray en gevraagd wat de element naam is. Voorbeeld: *"Wat is het element H, met atoomnummer 2?"* Antwoord: He. Ook hier zelfde score.

Indien de gebruiker fout antwoord dan wordt eerst het juist antwoord getoond en dan wordt een score van 0 teruggegeven.

**Tip:** je kan overwegen om voor de 3 vraagtypes 3 aparte methodes aan te maken die je dan aanroept vanuit deze methode (hoort niet bij opgave, maar zal je code wel leesbaarder maken)

### SuddenDeathRonde

Deze methode aanvaardt 2 parameters:

* Een namenarray van strings, die de namen van de elementen zal bevatten.
* Een even lange andere symbolenarray van strings, die de respectievelijke symbolen zal bevatten

De methode stuurt een int terug, die de totale score voorstelt.

Deze methode start een loop waarin telkens een vraag van het type ``ZoekSymbool`` wordt gesteld gebruikmaken van de ``StelVraag``methode.

Zolang de gebruiker juist antwoordt blijft deze loop doorgaan. De loop zal de totale score bijhouden (het telt het resultaat van ``StelVraag`` op bij een totale score).

De methode stopt wanneer de gebruiker een fout heeft gemaakt. Het geeft dan de totaalscore terug.

## Voorbeeld werking

**Een liggend streepje aan het begin van een lijn geeft aan dat dit door de gebruiker werd ingevoerd:**

```text
Hoeveel vragen moeten er in ronde 1 gesteld worden?
>3

Ronde 1 start! Hier volgen 3 vragen

Wat is element  Cl, met atoomnummer 17?
>Chloor
Fout. Het was Chlorine. Geen punt!

Wat is element  Zn, met atoomnummer 30?
>Zinc
Juist! 1  punt bij

Wat is het atoomnummer van Radon?
>120
Fout. Het was 86. Geen punt!


Je score voor ronde 1 is 1

De sudden death ronde start nu!

Wat is het symbool van Chromium, met atoomnummer 24?
>Cr
Juist! 1  punt bij

Wat is het symbool van Astatine, met atoomnummer 85?
>As
Fout. Het was At.Sudden death gedaan!

Je score voor ronde 2 is 1
Je totale score  is 2
```