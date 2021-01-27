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
      bg="black"
    >
      <Stack isInline>
        <Button colorScheme="gray.50" variant="solid" as={ReachLink} to="/home">
          PokedexApp
        </Button>
      </Stack>

      <Stack isInline spacing={2} mr={2} display={{ base: "none", md: "flex" }}>
        <Button
          size="sm"
          color="white"
          bg="grass"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/okedex"
        >
          Pokedex
        </Button>
        <Button
          size="sm"
          color="white"
          bg="poison"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/combination"
        >
          Type Weaks
        </Button>
        <Button
          size="sm"
          color="white"
          bg="water"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/search"
        >
          Search Pokemon
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
