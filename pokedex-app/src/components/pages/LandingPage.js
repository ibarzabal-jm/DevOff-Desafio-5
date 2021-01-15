import React from "react";
import { Button, Heading, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Pokedex from "./Pokedex";

const LandingPage = () => {
  return (
    <Stack direction="column" justify="center" spacing={4}>
      <Stack spacing={4}>
        <Heading textAlign="center">What Pokemon are you looking for?</Heading>
        <Input
          alignSelf="center"
          placeholder="Search Pokemon"
          size="md"
          maxW={600}
        ></Input>
      </Stack>
      <SimpleGrid gap={3} columns={2} padding={3}>
        <Button
          size="md"
          color="white"
          borderRadius={12}
          padding={3}
          bg="grass"
          _hover={{ color: "black", opacity: 0.8 }}
          as={ReachLink}
          to="/pokedex"
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
      </SimpleGrid>
      <Pokedex />
    </Stack>
  );
};

export default LandingPage;
