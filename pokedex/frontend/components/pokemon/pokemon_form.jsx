import React from 'react';
import { receiveNewPokemon } from '../../actions/pokemon_actions';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.pokemon_types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];

    this.state = {name: "", attack: "", defense: "",
       poke_type: "", image_url: "", moves: ""};

    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: add stuff later
  }

  render() {
    let types = this.pokemon_types.map(type => <option value={type}>{type}</option>)
    return (
    <form>

      <input placeholder="Name" onChange={this.update("name")}>{this.state.name}</input>
      <select>{types}</select>
    </form>
  );
  }
}
