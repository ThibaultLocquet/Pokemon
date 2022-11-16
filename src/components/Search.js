import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemons from "./Pokemons";
import Pokemon from "./Pokemon";

const Search = () => {
  const [search, setSearch] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState();

  function handleChange(e) {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }
  useEffect(() => {
    if (search) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((response) => {
          setPokemon(response.data);
          setPokemons([]);
        })
        .catch((error) => {
          //console.log(error);
        });
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((response) => {
          console.log(response);
          setPokemons(response.data.results);
        })
        .catch((error) => {
          //console.log(error);
        });
    }
  }, [search]);
  return (
    <div>
      <input type="text" name="search" value={search} onChange={handleChange} />
      {pokemons && <Pokemons list={pokemons} />}
      {pokemon && <Pokemon list={pokemon} />}
    </div>
  );
};

export default Search;
