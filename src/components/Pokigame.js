import React, { Component } from 'react';
import './Pokigame.css';
import Pokidex from './Pokidex';


class Pokigame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };
  render() {
    const { exp, pokemon, } = this.props;
    let hand = [];
    let hand2 = [...pokemon];

    while (hand.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand.push(randomPokemon);
    }
    let experience1 = hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let experience2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
      <div>
        <Pokidex
          pokemon={hand}
          exp={experience1}
          isWinner={experience1 > experience2}
        />
         <Pokidex
          pokemon={hand2}
          exp={experience2}
          isWinner={experience2 > experience1}
        />
      </div>
    )
  }
};

export default Pokigame;