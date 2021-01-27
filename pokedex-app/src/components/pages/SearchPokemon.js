import React, { useState } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { AddPokemon } from "../SearchPokemon/AddPokemon";
import PokemonThumbnail from "../PokemonThumbnail";

const SearchPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <Stack spacing={4} padding={10}>
      <Heading textAlign="center">What Pokemon are you looking for?</Heading>
      <AddPokemon setPokemons={setPokemons} />
      {pokemons.map((pokemon) => (
        <PokemonThumbnail pokemon={pokemon} />
      ))}
    </Stack>
  );
};

export default SearchPokemon;
