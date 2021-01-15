import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      isInline
      alignItems="center"
      height={12}
      justifyContent="space-between"
      bg="black"
    >
      <Stack isInline>
        <Button colorScheme="gray.50" variant="solid" as={ReachLink} to="/home">
          PokedexApp
        </Button>
      </Stack>
      <Stack isInline>
        <Button
          size="md"
          color="white"
          bg="fire"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/okedex"
        >
          Pokedex
        </Button>
        <Button
          size="md"
          color="white"
          bg="ground"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/combination"
        >
          Type Calculator
        </Button>
        <Button
          size="md"
          color="white"
          bg="water"
          _hover={{ color: "black", opacity: 0.8 }}
        >
          Get Pokemon
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
