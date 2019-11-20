import React, { Component } from 'react';
import './Pokicard.css'

const POKI_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
class Pokicard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgSRC = `${POKI_API}${padToThree(id)}.png`;

    return (
      <div className="Pokicard">
        <h1 className="Pikicard-title">{name}</h1>
        <img src={imgSRC} />
        <div className="Pokicard-data"> Type: {type}</div>
        <div className="Pokicard-data"> Experience: {base_experience}</div>
      </div>
    )
  }
};

export default Pokicard;