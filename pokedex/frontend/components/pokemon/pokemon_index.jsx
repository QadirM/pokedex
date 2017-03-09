import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemonList = this.props.pokemon.map((pokemon) => {
      return (
        <li key={pokemon.id} >
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image_url}></img>
        </li>
      );
    });

    return(
      <ul>
        {pokemonList}
      </ul>
    );
  }
}

export default PokemonIndex;
