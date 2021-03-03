import React, { useEffect, useState } from "react";
import { Heading, Stack, Spinner } from "@chakra-ui/react";
import { useFetchGetPokemonID } from "../../hooks/useFetchGetPokemonID";
import Quiz from "../PokemonQuiz/Quiz";
import SelectLevel from "../PokemonQuiz/SelectLevel";
import ToolBarPages from "../UI/ToolBarPages";

const PokemonQuiz = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [random, setRandom] = useState(null);
  const [generation, setGeneration] = useState({ name: "I", min: 1, max: 151 });
  const { pokemon, loading } = useFetchGetPokemonID(random);

  useEffect(() => {
    const idRandom = getRandomNumber(generation.min, generation.max);
    setRandom(idRandom);
  }, [generation]);

  return (
    <Stack
      alignContent="center"
      bg="white"
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <ToolBarPages />

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
          nextPokemon={() =>
            setRandom(getRandomNumber(generation.min, generation.max))
          }
        />
      )}
      <SelectLevel setGeneration={setGeneration} generation={generation} />
    </Stack>
  );
};

export default PokemonQuiz;
