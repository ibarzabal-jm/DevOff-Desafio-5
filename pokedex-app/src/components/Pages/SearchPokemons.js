import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";
import PokemonThumbnail from "../PokemonThumbnail";

const SearchPokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <Stack spacing={4} padding={10}>
      <Heading textAlign="center">What Pokemon are you looking for?</Heading>
      <AddPokemon setPokemons={setPokemons} />
      {pokemons.length > 0 && (
        <SimpleGrid
          columns={2}
          gap={3}
          borderRadius={20}
          bg="gray.200"
          padding={2}
        >
          {pokemons.map((pokemon) => (
            <PokemonThumbnail pokemon={pokemon} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default SearchPokemonsPage;
