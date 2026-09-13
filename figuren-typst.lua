-- Geeft de afbeeldingen in de pdf een maat die bij hun inhoud past.
--
-- Zonder breedte rekent Typst de maat uit de png zelf: pixels gedeeld door de
-- dpi in de metadata, en zonder dpi 72. De hand-drawn schema's zijn 1500 tot
-- 2500 px breed zonder dpi, en kwamen er dus allemaal op volle tekstbreedte
-- uit: drie kaders "Homo Habilis / Erectus / Sapiens" vulden een hele pagina.
-- De breedtes in de bron (<!--{width=80%}-->) staan in commentaar en zijn voor
-- de website bedoeld, dus die helpen hier niet.
--
-- Wat deze filter doet, enkel voor afbeeldingen zonder width of height:
--   * schema's met een generator in imagegen/: 0.38 pt per px. De tekst in
--     die schema's is Caveat op 24 tot 42 px, dat wordt zo 9 tot 16 pt.
--     Caveat heeft een kleine x-hoogte, dus kleiner leest niet meer.
--   * png's met een eigen dpi (bv. de 300 dpi-afbeeldingen): die dpi volgen.
--   * al de rest (vooral screenshots, 72 of 96 dpi): 0.75 pt per px, de maat
--     waarop je ze op een scherm ziet.
-- Daarna nooit breder dan de tekst en nooit hoger dan MAX_HOOGTE.
--
-- Een afbeelding die toch anders moet, krijgt in de bron {pdf-width=40%}.
-- De website negeert dat attribuut.
local TEKSTBREEDTE = 453.5 -- pt: A4 (595.3 pt) min twee marges van 2.5 cm
local MAX_HOOGTE = 300     -- pt, ongeveer 10.5 cm
local SCHAAL_SCHEMA = 0.38
local SCHAAL_SCHERM = 0.75

local function lees(pad)
  local f = io.open(pad, "rb")
  if not f then return nil end
  local data = f:read("a")
  f:close()
  return data
end

local function bestaat(pad)
  local f = io.open(pad, "rb")
  if f then f:close() end
  return f ~= nil
end

local function zoek(src)
  local kandidaten = { src }
  if src:sub(1, 3) == "../" then kandidaten[#kandidaten + 1] = "content/" .. src:sub(4) end
  for _, p in ipairs(kandidaten) do
    if bestaat(p) then return p end
  end
  return nil
end

local function heeft_generator(pad)
  local map, naam = pad:match("^(.*)[/\\]([^/\\]+)%.%w+$")
  if not map then return false end
  local basis = naam:gsub("NEW$", ""):gsub("Alternatief$", "")
  for _, ext in ipairs({ ".js", ".mjs", ".svg" }) do
    if bestaat(map .. "/imagegen/" .. basis .. ext) then return true end
  end
  return false
end

function Image(img)
  if not quarto.doc.is_format("typst") then return nil end

  local pdfw = img.attributes["pdf-width"]
  if pdfw then
    img.attributes["pdf-width"] = nil
    img.attributes.width = pdfw
    img.attributes.height = nil
    return img
  end
  if img.attributes.width or img.attributes.height then return nil end
  if not img.src:lower():match("%.png$") and not img.src:lower():match("%.jpe?g$") then return nil end
  if not (pandoc.image and pandoc.image.size) then return nil end

  local pad = zoek(img.src)
  if not pad then return nil end
  local ok, maat = pcall(pandoc.image.size, lees(pad))
  if not ok or not maat then return nil end

  local schaal
  local dpi = maat.dpi_horz or 72
  if heeft_generator(pad) then
    schaal = SCHAAL_SCHEMA
  elseif dpi ~= 72 and dpi ~= 96 then
    schaal = 72 / dpi
  else
    schaal = SCHAAL_SCHERM
  end

  local b, h = maat.width * schaal, maat.height * schaal
  local f = 1
  if b > TEKSTBREEDTE then f = TEKSTBREEDTE / b end
  if h * f > MAX_HOOGTE then f = MAX_HOOGTE / h end
  img.attributes.width = string.format("%.0f%%", b * f / TEKSTBREEDTE * 100)
  return img
end

-- Een afbeelding zonder onderschrift is geen figure, maar een alinea met enkel
-- die afbeelding. Typst zet ze dan links, terwijl figuren met onderschrift
-- gecentreerd staan. Nu ze niet meer allemaal tekstbreed zijn, valt dat op.
function Para(para)
  if not quarto.doc.is_format("typst") then return nil end
  local afb = nil
  for _, inl in ipairs(para.content) do
    if inl.t == "Image" and not afb then
      afb = inl
    elseif not (inl.t == "Space" or inl.t == "SoftBreak" or (inl.t == "RawInline" and inl.format == "html")) then
      return nil
    end
  end
  if not afb then return nil end
  return {
    pandoc.RawBlock("typst", "#align(center)["),
    pandoc.Plain({ afb }),
    pandoc.RawBlock("typst", "]"),
  }
end
