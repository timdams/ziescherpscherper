// Quarto-partial die de titelpagina van de PDF overneemt.
//
// Standaard zet het orange-book-sjabloon hier een kale titel/auteur-pagina neer.
// Wij vervangen die door de echte cover uit cover/cover.svg: die wordt als
// paginavullende afbeelding gelegd, en het titelblok erboven wordt leeggemaakt
// (lege titel, transparante achtergrond) zodat er niets overheen komt.
// De cover regenereer je met  python cover/maak_cover.py  (zie cover/README.md).
#import "@preview/orange-book:0.7.1": book, part, chapter, appendices

// --- Lettertypes -------------------------------------------------------
// orange-book zet zelf geen font, dus blijft Typst op zijn standaard
// (Libertinus Serif) staan. We zetten hier hetzelfde font als op de website:
// Inter voor de tekst, JetBrains Mono voor code. De ttf-bestanden zitten in
// fonts/ en worden via font-paths in _quarto.yml aan Typst doorgegeven.
$if(mainfont)$
#set text(font: "$mainfont$")
$endif$
$if(monofont)$
// ligatures/calt uit: JetBrains Mono maakt van >= een enkel teken (>=, !=, <=,
// ==, => en -> worden allemaal een symbool). In een boek waar studenten de
// operatoren net moeten leren typen, mag daar niets aan veranderen.
#show raw: set text(font: "$monofont$", ligatures: false, features: (calt: 0))
$endif$

// --- Papier -----------------------------------------------------------
// Quarto giet de background uit _brand.yml (#f8f9fa) over de hele pagina:
// het zet zelf  #set page(fill: brand-color.background)  in de header. Op het
// scherm is dat een zachte offwhite, op papier een grijze waas over elk blad.
// We zetten het terug op leeg; de header-includes staan in het sjabloon boven
// deze partial, dus deze regel wint.
#set page(fill: none)

// En de tekst zelf: Quarto zet die op de foreground uit _brand.yml (#4D4D4D).
// Middengrijs op 10pt drukt uitgewassen af, dus terug naar bijna-zwart. Het is
// dezelfde kleur als headings-color in custom.scss.
#set text(fill: rgb("#1a1a22"))

// --- "Verwacht resultaat"-blokken ---------------------------------------
// Op de website tekent custom.scss van  ::: {.console}  een zwart terminal-
// venster met groene tekst. Hier doen we hetzelfde in Typst. Het blok wordt
// aangeroepen door console-typst.lua.
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
    // Quarto geeft codeblokken standaard een grijze achtergrond; die halen we
    // hier lokaal weg zodat het zwart van het venster blijft staan.
    #show raw.where(block: true): set block(fill: none, inset: 0pt, radius: 0pt)
    #show raw: set text(fill: rgb("#4ade80"))
    #raw(txt, block: true)
  ]
]

#show: book.with(
  cover: image("cover/cover.svg"),
  cover-background: rgb(0, 0, 0, 0),
  title: [],
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

// titel en auteur staan niet meer op de pagina, maar horen wel in de PDF-eigenschappen
#set document(
$if(title)$
  title: "$title$",
$endif$
$if(by-author)$
  author: ($for(by-author)$"$it.name.literal$",$endfor$),
$endif$
)

$if(margin-geometry)$
// Configure marginalia page geometry for book context
// Geometry computed by Quarto's meta.lua filter (typstGeometryFromPaperWidth)
// IMPORTANT: This must come AFTER book.with() to override the book format's margin settings
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
  // CRITICAL: Enable book mode for recto/verso awareness
  book: true,
  clearance: $margin-geometry.clearance$,
)
$endif$
