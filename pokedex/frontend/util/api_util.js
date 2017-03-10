export const fetchAllPokemon = () => (
  $.ajax({ url: "/api/pokemon" })
);

export const fetchPokemon = (id) => (
  $.ajax({ url: `/api/pokemon/${id}` })
);

export const makeNewPokemon = (pokemon) => (
  $.ajax({
    method: "POST",
    url: "api/pokemon/",
    data: pokemon
  })
);
