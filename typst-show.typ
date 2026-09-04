// Quarto-partial die de titelpagina van de PDF overneemt.
//
// Standaard zet het orange-book-sjabloon hier een kale titel/auteur-pagina neer.
// Wij vervangen die door de echte cover uit cover/cover.svg: die wordt als
// paginavullende afbeelding gelegd, en het titelblok erboven wordt leeggemaakt
// (lege titel, transparante achtergrond) zodat er niets overheen komt.
// De cover regenereer je met  python cover/maak_cover.py  (zie cover/README.md).
#import "@preview/orange-book:0.7.1": book, part, chapter, appendices

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
