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
    let {pokemon} = this.props;

    const pokemonList = Object.keys(pokemon).map((id) => {
      return (
        <li key={id} >
          <h3>{pokemon[id].name}</h3>
          <img src={pokemon[id].image_url}></img>
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
