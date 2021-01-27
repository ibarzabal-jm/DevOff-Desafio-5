import React from "react";
import Pokedex from "./Pokedex";
import SearchPokemons from "./SearchPokemons";
import NavButtons from "../UI/NavButtons";

const Landing = () => {
  return (
    <>
      <SearchPokemons />
      <NavButtons />
      <Pokedex />
    </>
  );
};

export default Landing;
