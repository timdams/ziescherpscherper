-- Per hoofdstuk bijsturen waar de pdf net niet uitkomt.
--
-- Elk hoofdstuk begint op een nieuwe pagina. Eindigt de tekst net een paar
-- regels te laat, dan staan die regels alleen op een verder lege pagina. Dat
-- los je niet op in de tekst zelf (de website heeft er geen last van), maar
-- hier: de figuren van dat hoofdstuk een fractie kleiner, of de regels een
-- fractie dichter op elkaar.
--
-- Sleutel: het bronbestand, zoals het in _quarto.yml staat.
--   figuren    = factor op de breedte die figuren-typst.lua berekende
--   interlinie = regelafstand in dat hoofdstuk (orange-book zet 0.5em)
--
-- Deze lijst hoort bij de huidige tekst. Verandert een hoofdstuk, dan kan een
-- regel overbodig worden of net tekortschieten: kijk dan opnieuw naar de pdf.
local BIJSTURING = {
  ["index.qmd"] = { tekst = "9.5pt", interlinie = "0.45em" },
  ["content/0_intro/zieverder.md"] = { tekst = "9.3pt", interlinie = "0.45em", ruimte = "0.8em" },
  ["content/2_tekst/escapechars.md"] = { figuren = 0.75, tekst = "9.5pt" },
  ["content/3_data/4c_math.md"] = { figuren = 0.75, tekst = "9.5pt" },
  ["content/3_data/ai.md"] = { figuren = 0.6, tekst = "9.5pt", interlinie = "0.46em", ruimte = "0.9em" },
  ["content/4_beslissingen/2_switch.md"] = { figuren = 0.75, interlinie = "0.46em", ruimte = "0.9em" },
  ["content/4_beslissingen/zieverder.md"] = { interlinie = "0.45em" },
  ["content/6_methoden/1_bibliotheken.md"] = { figuren = 0.85 },
  ["content/20_exceptions/0_exceptionhandling.md"] = { figuren = 0.75, interlinie = "0.46em", ruimte = "0.9em" },
  ["content/10_advancedklassen/zieverder.md"] = { tekst = "9.5pt", ruimte = "0.8em" },
  ["content/14_compositie/this.md"] = { figuren = 0.85 },
  ["content/B_appendix/generics.md"] = { tekst = "9.5pt", interlinie = "0.45em", ruimte = "0.8em" },
  ["content/B_appendix/boete.md"] = { interlinie = "0.45em" },
}

-- De filter ziet het hele boek als een document, zonder te weten uit welk
-- bestand een stuk komt. Elk hoofdstukbestand begint wel met precies een kop
-- van niveau 1, in de volgorde van _quarto.yml. Die lijst lezen we dus zelf.
local function hoofdstukbestanden()
  local f = io.open("_quarto.yml", "r")
  if not f then return nil end
  local lijst, inboek, inlijst = {}, false, false
  for regel in f:lines() do
    if regel:match("^book:") then
      inboek = true
    elseif inboek and regel:match("^%S") then
      break
    elseif inboek and regel:match("^%s+chapters:%s*$") or regel:match("^%s+appendices:%s*$") then
      inlijst = true
    end
    if inboek and inlijst then
      local pad = regel:match("^%s*%-%s+([^%s:\"]+%.%a+)%s*$")
      if pad then lijst[#lijst + 1] = pad end
    end
  end
  f:close()
  return lijst
end

local function schaal(img, factor)
  local pct = img.attributes.width and img.attributes.width:match("^([%d%.]+)%%$")
  if pct then
    img.attributes.width = string.format("%.0f%%", tonumber(pct) * factor)
  end
  return img
end

function Pandoc(doc)
  if not quarto.doc.is_format("typst") then return nil end
  if next(BIJSTURING) == nil then return nil end

  local bestanden = hoofdstukbestanden()
  if not bestanden then return nil end
  local aantal = 0
  for _, b in ipairs(doc.blocks) do
    if b.t == "Header" and b.level == 1 then aantal = aantal + 1 end
  end
  if aantal < #bestanden then
    quarto.log.warning("bijsturing-typst.lua: " .. aantal .. " hoofdstukkoppen voor " .. #bestanden
      .. " bestanden in _quarto.yml, bijsturing overgeslagen")
    return nil
  end

  local uit = pandoc.List()
  local n, regel, open = 0, nil, false

  local function sluit()
    if open then
      uit:insert(pandoc.RawBlock("typst", "]"))
      open = false
    end
  end

  for _, b in ipairs(doc.blocks) do
    if b.t == "Header" and b.level == 1 then
      sluit()
      n = n + 1
      regel = BIJSTURING[bestanden[n] or ""]
      uit:insert(b)
      if regel and (regel.interlinie or regel.ruimte or regel.tekst) then
        local zet = "#["
        if regel.tekst then zet = zet .. "\n#set text(size: " .. regel.tekst .. ")" end
        if regel.interlinie then zet = zet .. "\n#set par(leading: " .. regel.interlinie .. ")" end
        if regel.ruimte then zet = zet .. "\n#set block(spacing: " .. regel.ruimte .. ")" end
        uit:insert(pandoc.RawBlock("typst", zet))
        open = true
      end
    else
      if regel and regel.figuren then
        b = b:walk({ Image = function(img) return schaal(img, regel.figuren) end })
      end
      uit:insert(b)
    end
  end
  sluit()

  doc.blocks = uit
  return doc
end
