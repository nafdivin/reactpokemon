import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
class Pokedex extends Component {
  state = {};
  render() {
    const { isWinner, exp,pokemon } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning hand</h1>;
    } else {
      title = <h1 className="Pokedex-looser">Looser hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h2>Total experience : {exp}</h2>
        <div className="Pokedex-cards">
        
            {pokemon.map((p) => (
              <Pokecard 
              id={p.id}
              key={p.id} 
              name={p.name} 
              type={p.type} 
              exp={p.base_experience} />
            ))}
         
        </div>
      </div>
    );
  }
}

export default Pokedex;
