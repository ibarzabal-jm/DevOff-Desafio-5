import React, { useState } from "react";
import {
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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const nameSearch = inputValue;

    if (inputValue.trim().length > 2) {
      await api
        .miniDataByName(inputValue.toLowerCase())
        .then((pokemon) => {
          setLoading(false);
          setPokemons((pokemons) => [pokemon, ...pokemons]);
          setInputValue("");
        })
        .catch((error) => {
          setLoading(false);
          setError(`${nameSearch} not found`);
        });
    } else {
      setLoading(false);
      setError("Pokemon name to short");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup variant="filled">
          <InputLeftElement
            children={<SearchIcon color="black" />}
            onClick={handleSubmit}
            cursor="pointer"
          />
          <Input
            placeholder="Search Pokémon"
            type="text"
            isInvalid={error}
            errorBorderColor="crimson"
            value={inputValue}
            onChange={handleInputChange}
          />
        </InputGroup>
      </form>
      {error && <Text textColor="crimson">{error}</Text>}
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="blue.200"
          color="black"
          size="xl"
        />
      )}
    </>
  );
};

AddPokemon.propType = {
  setPokemons: PropTypes.func.isRequired,
};
