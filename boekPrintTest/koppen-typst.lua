-- Haalt overgeslagen kopniveaus weg in de pdf.
--
-- Een aantal hoofdstukbestanden springt van  #  meteen naar  ### . Op de
-- website valt dat niet op, maar in de pdf wordt dat "5.0.3 WriteLine", en de
-- koptekst van orange-book toont dan de laatste ## die ze vindt, ook als die
-- uit een ander hoofdstuk komt ("5.0 Wat is programmeren?" boven hoofdstuk 5).
--
-- Per hoofdstuk (alles tussen twee koppen van niveau 1) zoeken we het hoogste
-- subniveau. Is dat dieper dan 2, dan schuiven alle subkoppen van dat hoofdstuk
-- evenveel op.
function Pandoc(doc)
  if not quarto.doc.is_format("typst") then return nil end

  local minima, huidig = {}, 0
  doc:walk({
    Header = function(h)
      if h.level == 1 then
        huidig = huidig + 1
      else
        minima[huidig] = math.min(minima[huidig] or 99, h.level)
      end
    end,
  })

  huidig = 0
  return doc:walk({
    Header = function(h)
      if h.level == 1 then
        huidig = huidig + 1
        return nil
      end
      local m = minima[huidig]
      if m and m > 2 then
        h.level = math.max(2, h.level - (m - 2))
        return h
      end
    end,
  })
end
