#!/usr/bin/env bash
# Rendert de test-pdf en zet de gevraagde paginas als png in preview/.
#   bash boekPrintTest/preview.sh 1 12
#
# De pdf wordt naar preview/laatste.pdf gekopieerd. Zet daar je viewer op en
# niet op pdf/Zie-Scherp-Scherper.pdf: Quarto gooit die map bij elke render
# leeg en struikelt over een pdf die nog openstaat ("os error 32").
set -e
cd "$(dirname "$0")/.."
quarto render boekPrintTest
cd boekPrintTest
mkdir -p preview && rm -f preview/*.png
cp pdf/Zie-Scherp-Scherper.pdf preview/laatste.pdf
pdftoppm -png -r 75 -f "${1:-1}" -l "${2:-12}" preview/laatste.pdf preview/p
ls preview
