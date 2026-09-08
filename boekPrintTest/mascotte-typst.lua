-- Zet de mascottes in de notitieblokjes (blockquotes) op een vaste hoogte.
--
-- De png's hebben elk hun eigen dpi in de metadata, en Typst rekent daarmee de
-- afmeting uit. Daardoor kwam de bouwvakker er klein uit (322 px @ 300 dpi) en
-- stagiair Steven een halve pagina groot (392 px, helemaal geen dpi). Op de
-- website valt dat niet op: custom.scss legt ze daar allemaal op 60 px.
--
-- We zetten de hoogte en niet de breedte: de mascottes hebben verschillende
-- verhoudingen, en gelijke hoogte oogt rustiger dan gelijke breedte.
local HOOGTE = "3.6cm"

function BlockQuote(bq)
  if not quarto.doc.is_format("typst") then return nil end
  return pandoc.walk_block(bq, {
    Image = function(img)
      img.attributes.width = nil
      img.attributes.height = HOOGTE
      return img
    end,
  })
end
