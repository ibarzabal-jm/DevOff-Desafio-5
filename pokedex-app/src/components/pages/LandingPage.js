import React from "react";
import { Stack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Pokedex from "./Pokedex";
import SearchPokemon from "./SearchPokemon";

const LandingPage = () => {
  return (
    <Stack direction="column" justify="center" spacing={4}>
      <SearchPokemon />
      <SimpleGrid gap={3} columns={2} padding={3}>
        <Stack
          align="center"
          bg="grass"
          borderRadius={20}
          isInline
          justifyContent="space-between"
          padding={3}
          _hover={{ opacity: 0.8 }}
          as={ReachLink}
          to="/pokedex"
        >
          <Text color="white">Pokedex</Text>
          <Image
            filter="invert(100%)"
            maxWidth="100px"
            width={10}
            src="../assets/ui/pokeball.svg"
          />
        </Stack>
        <Stack
          align="center"
          bg="fire"
          borderRadius={20}
          isInline
          justifyContent="space-between"
          padding={3}
          _hover={{ opacity: 0.8 }}
          as={ReachLink}
          to="/moves"
        >
          <Text color="white">Moves</Text>
          <Image
            filter="invert(100%)"
            maxWidth="100px"
            width={10}
            src="../assets/ui/pokeball.svg"
          />
        </Stack>
        <Stack
          align="center"
          bg="water"
          borderRadius={20}
          isInline
          justifyContent="space-between"
          padding={3}
          _hover={{ opacity: 0.8 }}
          as={ReachLink}
          to="/search"
        >
          <Text color="white">Search Pokemon</Text>
          <Image
            filter="invert(100%)"
            maxWidth="100px"
            width={10}
            src="../assets/ui/pokeball.svg"
          />
        </Stack>
        <Stack
          align="center"
          bg="poison"
          borderRadius={20}
          isInline
          justifyContent="space-between"
          padding={3}
          _hover={{ opacity: 0.8 }}
          as={ReachLink}
          to="/combination"
        >
          <Text color="white">Type Combination Calculator</Text>
          <Image
            filter="invert(100%)"
            maxWidth="100px"
            width={10}
            src="../assets/ui/pokeball.svg"
          />
        </Stack>
      </SimpleGrid>
      <Pokedex />
    </Stack>
  );
};

export default LandingPage;
