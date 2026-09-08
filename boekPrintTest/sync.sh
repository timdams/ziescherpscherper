#!/usr/bin/env bash
# Haalt hoofdstuk 1, het voorwoord en de cover opnieuw uit de echte repo.
# Draaien vanuit de projectroot:  bash boekPrintTest/sync.sh
set -e
cd "$(dirname "$0")/.."
DEST=boekPrintTest
mkdir -p "$DEST/content/0_intro" "$DEST/cover"
for f in 0_intrototcs 1_werkenmetvs 1_killai 2_firstprogram 3_console 4_fouten 5_kleuren zieverder kennisclips; do
  cp "content/0_intro/$f.md" "$DEST/content/0_intro/"
done
cp index.qmd _brand.yml _variables.yml references.bib "$DEST/"
cp cover/cover.svg "$DEST/cover/"
# enkel de afbeeldingen die hoofdstuk 1 echt gebruikt (content/assets is 184 MB)
grep -ohE '\]\([^)]*\)' content/0_intro/*.md \
  | grep -iE '\.(png|jpg|jpeg|svg|gif)' \
  | sed 's/.*(//;s/)$//;s/ .*//' \
  | sed 's#^\.\./#content/#' | sort -u \
  | while read -r p; do
      [ -f "$p" ] && mkdir -p "$DEST/$(dirname "$p")" && cp "$p" "$DEST/$p"
    done
echo "gesynct"
