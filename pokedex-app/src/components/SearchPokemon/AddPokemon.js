import React, { useState } from "react";
import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { api } from "../../api/api";
import PropTypes from "prop-types";

export const AddPokemon = ({ setPokemons }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const nameSearch = inputValue.replace(/ /g, "-").toLowerCase();

    await api
      .miniData(nameSearch)
      .then((pokemon) => {
        setLoading(false);
        setPokemons((pokemons) => [pokemon, ...pokemons]);
        setInputValue("");
      })
      .catch((error) => {
        setLoading(false);
        setError(`${nameSearch} not found`);
      });
  };

  return (
    <Stack width="100%">
      <form onSubmit={handleSubmit}>
        <InputGroup variant="filled">
          <InputLeftElement
            children={<SearchIcon color="black" />}
            onClick={handleSubmit}
            cursor="pointer"
          />
          <Input
            placeholder="Search Pokémon by name or number"
            type="text"
            isInvalid={error}
            errorBorderColor="crimson"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </InputGroup>
      </form>
      {error && <Text textColor="crimson">{error}</Text>}
      {loading && (
        <Spinner
          alignSelf="center"
          thickness="4px"
          speed="0.65s"
          emptyColor="blue.200"
          color="black"
          size="xl"
        />
      )}
    </Stack>
  );
};

AddPokemon.propType = {
  setPokemons: PropTypes.func.isRequired,
};
