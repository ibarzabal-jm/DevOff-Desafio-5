import React, { useEffect, useState } from "react";
import { Heading, Stack, Spinner } from "@chakra-ui/react";
import { useFetchGetPokemonID } from "../../hooks/useFetchGetPokemonID";
import Quiz from "../PokemonQuiz/Quiz";
import SelectLevel from "../PokemonQuiz/SelectLevel";

const PokemonQuiz = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(151);
  const [random, setRandom] = useState(null);

  const { pokemon, loading } = useFetchGetPokemonID(random);

  useEffect(() => {
    setRandom(getRandomNumber(min, max));
  }, [min, max]);

  return (
    <Stack
      bg="#fff"
      padding={4}
      spacing={3}
      margin={{ base: 0, md: 4 }}
      rounded={{ base: 0, md: 12 }}
    >
      <Heading textAlign="center" mt={4}>
        Who's that Pokémon?
      </Heading>
      {loading ? (
        <Stack alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign="center"
          />
        </Stack>
      ) : (
        <Quiz
          pokemon={pokemon}
          nextPokemon={() => setRandom(getRandomNumber(min, max))}
        />
      )}

      <SelectLevel setMin={setMin} setMax={setMax} />
    </Stack>
  );
};

export default PokemonQuiz;
