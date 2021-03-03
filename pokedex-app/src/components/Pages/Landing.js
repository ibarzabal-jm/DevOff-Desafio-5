import React from "react";
import Pokedex from "./Pokedex";
import SearchPokemons from "./SearchPokemons";
import NavButtons from "../UI/NavButtons";
import { SimpleGrid, Stack } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Stack alignItems="stretch" bg="#fff" rounded={30}>
      <SearchPokemons />
      <SimpleGrid bg="#fff" columns={2} gap={3} paddingX={4}>
        <NavButtons />
      </SimpleGrid>
      <Pokedex />
    </Stack>
  );
};

export default Landing;
