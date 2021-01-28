import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";
import PokemonThumbnail from "../PokemonThumbnail";

const SearchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <Stack spacing={3} padding={4} margin={{ base: 0, md: 4 }} bg="#fff">
      <Heading textAlign="center" mt={4}>
        What Pokemon are you looking for?
      </Heading>
      <AddPokemon setPokemons={setPokemons} />
      {pokemons.length > 0 && (
        <SimpleGrid
          columns={2}
          gap={3}
          borderRadius={20}
          bg="gray.200"
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
