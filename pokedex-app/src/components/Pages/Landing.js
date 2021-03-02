import React from "react";
import Pokedex from "./Pokedex";
import SearchPokemons from "./SearchPokemons";
import NavButtons from "../UI/NavButtons";
import { Stack } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Stack alignItems="stretch" bg="#fff" rounded={30}>
      <SearchPokemons />
      <NavButtons />
      <Pokedex />
    </Stack>
  );
};

export default Landing;
