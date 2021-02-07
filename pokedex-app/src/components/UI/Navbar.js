import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      as="nav"
      isInline
      alignItems="center"
      height={12}
      justifyContent={{ base: "center", md: "space-between" }}
      bg="gray.900"
      zIndex={200}
    >
      <Stack isInline>
        <Button colorScheme="gray.50" variant="solid" as={ReachLink} to="/home">
          PokedexApp
        </Button>
      </Stack>
      <Stack isInline mr={2} display={{ base: "none", md: "inline-flex" }}>
        <Button
          size="sm"
          color="white"
          bg="grass"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/pokedex"
        >
          Pokedex
        </Button>
        <Button
          size="sm"
          color="white"
          bg="fire"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/moves"
        >
          Moves
        </Button>
        <Button
          size="sm"
          color="white"
          bg="water"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/search"
        >
          Find Pokemon
        </Button>
        <Button
          size="sm"
          color="white"
          bg="ground"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/quiz"
        >
          Who's that Pokemon?
        </Button>
        <Button
          size="sm"
          color="white"
          bg="poison"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/combination"
        >
          Types Weaks
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
