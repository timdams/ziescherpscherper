// Vertrekbasis voor de Quarto-partial die de titelpagina van de pdf overneemt.
// Kopieer dit bestand naar de projectroot als typst-show.typ en zet het bij
//   format: typst: template-partials: [typst-show.typ]
//
// Wat hier gebeurt:
//  1. het sjabloon orange-book wordt aangeroepen in plaats van Quarto's eigen
//     typst-sjabloon;
//  2. de kale titelpagina wordt vervangen door cover/cover.svg, paginavullend;
//  3. de fonts uit _quarto.yml worden alsnog gezet (orange-book kent geen
//     mainfont-parameter, dus zonder deze twee regels doen ze niets);
//  4. papier en tekstkleur worden teruggezet naar wit/bijna-zwart;
//  5. #zss-console(...) wordt gedefinieerd, dat de lua-filter aanroept.
//
// Aanpassen voor een nieuw project: de padnaam van de cover, de supplement-
// woorden (taal), en de kleuren van het consoleblok.
#import "@preview/orange-book:0.7.1": book, part, chapter, appendices

// --- Lettertypes -------------------------------------------------------
$if(mainfont)$
#set text(font: "$mainfont$")
$endif$
$if(monofont)$
// ligatures/calt uit: een programmeerfont maakt van >= een enkel teken (ook
// !=, <=, ==, => en ->). In een boek waar de lezer die operatoren net moet
// leren typen, mag daar niets aan veranderen.
#show raw: set text(font: "$monofont$", ligatures: false, features: (calt: 0))
$endif$

// --- Papier -----------------------------------------------------------
// Quarto giet de background uit _brand.yml over de hele pagina. Op het scherm
// is dat een zachte offwhite, op papier een grijze waas over elk blad.
#set page(fill: none)

// En de tekst zelf staat op de foreground uit _brand.yml. Middengrijs op 10pt
// drukt uitgewassen af, dus terug naar bijna-zwart.
#set text(fill: rgb("#1a1a22"))

// --- "Verwacht resultaat"-blokken ---------------------------------------
// Wordt aangeroepen door console-typst.lua, dat  ::: {.console}  vervangt.
// Kleuren gelijk houden met de css van de website.
#let zss-console(txt) = block(
  width: 100%,
  above: 1.3em,
  below: 1.3em,
  radius: 4pt,
  fill: rgb("#0d1117"),
)[
  #block(
    width: 100%,
    fill: rgb("#161b22"),
    radius: (top: 4pt),
    inset: (x: 0.9em, y: 0.45em),
    stroke: (bottom: 0.5pt + rgb("#30363d")),
  )[
    #text(
      font: "$mainfont$",
      size: 7pt,
      weight: "bold",
      tracking: 0.08em,
      fill: rgb("#c9d1d9"),
    )[VERWACHT RESULTAAT]
  ]
  #block(width: 100%, inset: (x: 0.9em, y: 0.8em))[
    // Quarto geeft codeblokken een grijze achtergrond; die halen we hier weg
    // zodat het zwart van het venster blijft staan.
    #show raw.where(block: true): set block(fill: none, inset: 0pt, radius: 0pt)
    #show raw: set text(fill: rgb("#4ade80"))
    #raw(txt, block: true)
  ]
]

#show: book.with(
  cover: image("cover/cover.svg"),
  cover-background: rgb(0, 0, 0, 0),   // transparant, zodat er niets over de cover komt
  title: [],                            // leeg: de titel staat in de cover zelf
  author: "",
$if(date)$
  date: "$date$",
$endif$
$if(lang)$
  lang: "$lang$",
$endif$
  // orange-book is Engelstalig: zonder deze twee staat er "Chapter 71. Properties"
  // in de koptekst en "Chapter 5" bij een verwijzing naar een hoofdstuk.
  supplement-chapter: "Hoofdstuk",
  supplement-part: "Deel",
  // brand-color en brand-logo komen uit _brand.yml. Heb je dat bestand niet,
  // vervang dan door een vaste kleur en  logo: none.
  main-color: brand-color.at("primary", default: blue),
  logo: {
    let logo-info = brand-logo.at("medium", default: none)
    if logo-info != none { image(logo-info.path, alt: logo-info.at("alt", default: none)) }
  },
$if(toc-depth)$
  outline-depth: $toc-depth$,
$endif$
$if(lof)$
  list-of-figure-title: "$if(crossref.lof-title)$$crossref.lof-title$$else$$crossref-lof-title$$endif$",
$endif$
$if(lot)$
  list-of-table-title: "$if(crossref.lot-title)$$crossref.lot-title$$else$$crossref-lot-title$$endif$",
$endif$
$if(margin-geometry)$
  padded-heading-number: false,
$endif$
)

// titel en auteur staan niet meer op de pagina, maar horen wel in de pdf-eigenschappen
#set document(
$if(title)$
  title: "$title$",
$endif$
$if(by-author)$
  author: ($for(by-author)$"$it.name.literal$",$endfor$),
$endif$
)

$if(margin-geometry)$
// Kantlijngeometrie, door Quarto's meta.lua berekend. Moet NA book.with() komen.
#import "@preview/marginalia:0.3.1" as marginalia

#show: marginalia.setup.with(
  inner: (
    far: $margin-geometry.inner.far$,
    width: $margin-geometry.inner.width$,
    sep: $margin-geometry.inner.separation$,
  ),
  outer: (
    far: $margin-geometry.outer.far$,
    width: $margin-geometry.outer.width$,
    sep: $margin-geometry.outer.separation$,
  ),
  top: $if(margin.top)$$margin.top$$else$1.25in$endif$,
  bottom: $if(margin.bottom)$$margin.bottom$$else$1.25in$endif$,
  book: true,
  clearance: $margin-geometry.clearance$,
)
$endif$
