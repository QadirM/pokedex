import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { Link } from 'react-router';

class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render(){
    let { pokemonDetail } = this.props;
    let pokemonItems = "";
    if (pokemonDetail.items) {
      pokemonItems = pokemonDetail.items.map(item => {
        return (
          <Link  key={item.id} to={`pokemon/${this.props.params.pokemonId}/item/${item.id}`}>
            <img key={item.id} src={item.image_url}></img>
          </Link>
        );
      });
    }

      return(
        <div>
          <ul>
            <li><h3>{pokemonDetail.name}</h3></li>
            <li>Type: {pokemonDetail.poke_type}</li>
            <li>Attack: {pokemonDetail.attack}</li>
            <li>Defense: {pokemonDetail.defense}</li>
            <li>Moves: {pokemonDetail.moves}</li>
            <li>Items:
              {pokemonItems}
              { this.props.children }
            </li>
          </ul>
        </div>
      );

  }
}

export default PokemonDetail;
