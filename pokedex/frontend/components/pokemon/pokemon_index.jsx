import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let { pokemon } = this.props;

    const pokemonList = pokemon.map((poke) => {
      return ( <PokemonIndexItem key={poke.id} pokemon={poke} /> );
    });

    return(
      <div>
        {this.props.children}
        <ul>
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
