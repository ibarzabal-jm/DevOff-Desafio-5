import React from "react";
import Pokedex from "./Pokedex";
import SearchPokemons from "./SearchPokemons";
import NavButtons from "../UI/NavButtons";
import { SimpleGrid, Stack } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Stack alignItems="stretch" bg="#fff" rounded={30}>
      <SearchPokemons limit={4} />
      <SimpleGrid bg="#fff" columns={2} gap={3} paddingX={4}>
        <NavButtons functionOnClick={null} />
      </SimpleGrid>
      <Pokedex />
    </Stack>
  );
};

export default Landing;
