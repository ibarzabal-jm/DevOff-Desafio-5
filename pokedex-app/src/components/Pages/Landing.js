import React from "react";
import Pokedex from "./Pokedex";
import SearchPokemons from "./SearchPokemons";
import NavButtons from "../UI/NavButtons";
import { Box } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Box bg="#fff" margin={{ base: 0, md: 4 }} rounded={20}>
      <SearchPokemons />
      <NavButtons />
      <Pokedex />
    </Box>
  );
};

export default Landing;
