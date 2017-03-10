import values from 'lodash/values';

export const selectAllPokemon = state => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return (
    state.pokemonDetail.items
    .find( (item) => ( item.id === parseInt(itemId) ))
  );
};
