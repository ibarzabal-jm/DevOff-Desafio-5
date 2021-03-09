import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";

import PokemonThumbnail from "../PokemonThumbnail";
import ToolBarPages from "../UI/ToolBarPages";

const SearchPokemons = ({ limit = 100 }) => {
  const [pokemons, setPokemons] = useState([]);

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
        What Pokémon are you looking for?
      </Heading>
      <AddPokemon setPokemons={setPokemons} />
      <Stack
        background="url(../assets/ui/pokeballgray.svg) no-repeat center"
        backgroundPosition="bottom right"
        backgroundSize={150}
        flexGrow={1}
      >
        {pokemons.length > 0 && (
          <SimpleGrid
            columns={2}
            gap={2}
            bg="gray.200"
            borderRadius={20}
            padding={2}
          >
            {pokemons.slice(0, limit).map((pokemon, id) => (
              <PokemonThumbnail key={id} pokemon={pokemon} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Stack>
  );
};

export default SearchPokemons;
