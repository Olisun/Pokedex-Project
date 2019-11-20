import React, { Component } from 'react';
import './Pokicard.css'

const POKI_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokicard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let imgSRC = `${POKI_API}${id}.png`;

    return (
      <div className="Pokicard">
        <h1>{name}</h1>
        <img src={imgSRC} />
        <div>Type: {type}</div>
        <div>Experience: {base_experience}</div>
      </div>
    )
  }
};

export default Pokicard;