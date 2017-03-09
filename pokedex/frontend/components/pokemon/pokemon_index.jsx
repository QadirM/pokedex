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

  }
}
