import React, { Component } from 'react';
import Pokicard from './Pokicard';
import './Pokidex.css'

class Pokidex extends Component {
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
    const { exp, isWinner, pokemon } = this.props;
    return (
      <div className="Pokidex">
        <h1>Pokidex!</h1>
        <h2>Total Experience: {exp}</h2>
        <h2>{isWinner ? "Winner" : "Loser"}</h2>
        <div className="Pokidex-cards">
          {pokemon.map(poke => (
            <Pokicard
              id={poke.id}
              name={poke.name}
              type={poke.type}
              exp={poke.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokidex;