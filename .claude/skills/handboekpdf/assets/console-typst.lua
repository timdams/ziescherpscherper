-- Toont  ::: {.console}  blokken in de PDF als een echte terminal.
--
-- Op de website doet .console dat via custom.scss (zwart venster, groene
-- tekst, labelbalkje "Verwacht resultaat"). In Typst bestaat die css niet, dus
-- vervangen we het hele blok door een aanroep van #zss-console(...), dat in
-- typst-show.typ gedefinieerd staat.

-- In een Typst-string moeten enkel de backslash en het aanhalingsteken
-- ontsnapt worden; regeleindes worden \n.
local BS = string.char(92)

local function esc(s)
  s = s:gsub(BS, BS .. BS)
  s = s:gsub('"', BS .. '"')
  s = s:gsub(string.char(13), '')
  s = s:gsub(string.char(10), BS .. 'n')
  return s
end

function Div(div)
  if not quarto.doc.is_format("typst") then return nil end
  if not div.classes:includes("console") then return nil end

  local parts = {}
  for _, b in ipairs(div.content) do
    if b.t == "CodeBlock" then parts[#parts + 1] = b.text end
  end
  if #parts == 0 then return nil end

  local txt = esc(table.concat(parts, string.char(10)))
  return pandoc.RawBlock("typst", '#zss-console("' .. txt .. '")')
end
