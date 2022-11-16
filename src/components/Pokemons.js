import React from "react";

const Pokemons = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map((pokemon) => (
        <h2>{pokemon.name}</h2>
      ))}
    </div>
  );
};

export default Pokemons;
