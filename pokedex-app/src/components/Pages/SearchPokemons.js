import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";

import PokemonThumbnail from "../PokemonThumbnail";
import GoHomeButton from "../UI/GoHomeButton";

const SearchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <Stack
      alignContent="center"
      bg="white"
      margin={{ base: 0, sm: 1, md: 4 }}
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <GoHomeButton componentPathName={"/search"} />

      <Heading textAlign="center" mt={4}>
        What Pokémon are you looking for?
      </Heading>
      <AddPokemon setPokemons={setPokemons} />
      {pokemons.length > 0 && (
        <SimpleGrid
          columns={2}
          gap={2}
          bg="gray.200"
          borderRadius={20}
          padding={2}
        >
          {pokemons.map((pokemon, id) => (
            <PokemonThumbnail key={id} pokemon={pokemon} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default SearchPokemons;
