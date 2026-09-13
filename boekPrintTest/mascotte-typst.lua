-- Mascottes in de notitieblokjes (blockquotes): vaste hoogte, en de eerste
-- alinea ernaast in plaats van eronder.
--
-- De png's hebben elk hun eigen dpi in de metadata, en Typst rekent daarmee de
-- afmeting uit. Daardoor kwam de bouwvakker er klein uit (322 px @ 300 dpi) en
-- stagiair Steven een halve pagina groot (392 px, helemaal geen dpi). Op de
-- website valt dat niet op: custom.scss legt ze daar allemaal op 60 px.
--
-- We zetten de hoogte en niet de breedte: de mascottes hebben verschillende
-- verhoudingen, en gelijke hoogte oogt rustiger dan gelijke breedte.
--
-- In de bron staat de mascotte als eerste teken van de alinea
-- (>![](../assets/care.png)Tekst...). Typst zet ze dan als een reuzeletter in
-- de regel: de tekst begint rechtsonder naast de figuur en erboven blijft een
-- groot wit vlak. Daarom maken we er een grid van: mascotte links, eerste
-- alinea rechts, de rest van het blokje er gewoon onder.
local HOOGTE = "2.4cm"

local function leeg(inl)
  return inl.t == "Space" or inl.t == "SoftBreak" or inl.t == "LineBreak"
    or (inl.t == "RawInline" and inl.format == "html")
end

function BlockQuote(bq)
  if not quarto.doc.is_format("typst") then return nil end

  bq = pandoc.walk_block(bq, {
    Image = function(img)
      img.attributes.width = nil
      img.attributes.height = HOOGTE
      return img
    end,
  })

  local eerste = bq.content[1]
  if not eerste or (eerste.t ~= "Para" and eerste.t ~= "Plain") then return bq end

  local inl = eerste.content
  local k = 1
  while k <= #inl and leeg(inl[k]) do k = k + 1 end
  if k > #inl or inl[k].t ~= "Image" then return bq end

  local tekst = pandoc.List()
  for j = k + 1, #inl do tekst:insert(inl[j]) end
  while #tekst > 0 and leeg(tekst[1]) do tekst:remove(1) end

  local rechts, verder = nil, 2
  if #tekst > 0 then
    rechts = pandoc.Para(tekst)
  elseif bq.content[2] and bq.content[2].t == "Para" then
    rechts, verder = bq.content[2], 3
  else
    return bq
  end

  local nieuw = pandoc.List({
    pandoc.RawBlock("typst", "#grid(columns: (auto, 1fr), column-gutter: 1em, align: top, ["),
    pandoc.Plain({ inl[k] }),
    pandoc.RawBlock("typst", "], ["),
    rechts,
    pandoc.RawBlock("typst", "])"),
  })
  for j = verder, #bq.content do nieuw:insert(bq.content[j]) end
  bq.content = nieuw
  return bq
end
