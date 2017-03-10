import React from 'react';
import { Link } from 'react-router';

export const PokemonIndexItem = (props) => {
  let {pokemon} = props;
  return (
    <li key={pokemon.id} >
      <Link to={`pokemon/${pokemon.id}`} >
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image_url}></img>
      </Link>
  </li>
  );
};
