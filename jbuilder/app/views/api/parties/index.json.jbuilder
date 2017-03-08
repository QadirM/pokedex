json.array! @parties do |party|
  json.name party.name
  json.location party.location

  json.guests party.guests do |guest|
    json.name guest.name
  end
end