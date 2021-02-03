import React, { useState } from "react";
import { Heading, SimpleGrid, Stack, IconButton } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";
import { Link } from "react-router-dom";

import PokemonThumbnail from "../PokemonThumbnail";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

const SearchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const { pathname } = useLocation();

  return (
    <Stack
      bg="#fff"
      padding={4}
      spacing={3}
      margin={{ base: 0, md: 4 }}
      rounded={{ base: 0, md: 12 }}
    >
      {pathname === "/search" && (
        <IconButton
          colorScheme="teal"
          aria-label="go home"
          icon={<ArrowBackIcon />}
          width={8}
          height={8}
          cursor="pointer"
          as={Link}
          to="/"
        />
      )}
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
