import React, { useState } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import PokemonThumbnail from "../PokemonThumbnail";
import { useFetchGetPokemonID } from "../../hooks/useFetchGetPokemonID";
import Quiz from "../PokemonQuiz/Quiz";

const PokemonQuiz = () => {
  const [random, setRandom] = useState(3);

  const { pokemon, loading } = useFetchGetPokemonID(random);

  const nextPokemon = () => {
    setRandom(random + 1);
  };

  return (
    <Stack
      bg="#fff"
      padding={4}
      spacing={3}
      margin={{ base: 0, md: 4 }}
      rounded={{ base: 0, md: 12 }}
      height="100%"
    >
      <Heading textAlign="center" mt={4}>
        Who's that Pokémon?
      </Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Quiz pokemon={pokemon} nextPokemon={nextPokemon} />
      )}
    </Stack>
  );
};

export default PokemonQuiz;
