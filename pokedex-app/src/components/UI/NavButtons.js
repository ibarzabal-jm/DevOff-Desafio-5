import React from "react";
import { Stack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <SimpleGrid gap={3} columns={2} padding={3} margin={10}>
      <Stack
        align="center"
        bg="grass"
        borderRadius={20}
        height={16}
        isInline
        justifyContent="space-between"
        overflow="hidden"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/pokedex"
      >
        <Text color="white">Pokédex</Text>
        <Image
          marginRight={-7}
          opacity="0.2"
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
      <Stack
        align="center"
        bg="fire"
        height={16}
        overflow="hidden"
        borderRadius={20}
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/moves"
      >
        <Text color="white">Moves</Text>
        <Image
          marginRight={-7}
          opacity="0.2"
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
      <Stack
        align="center"
        bg="water"
        height={16}
        overflow="hidden"
        borderRadius={20}
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/search"
      >
        <Text color="white">Search Pokemon</Text>
        <Image
          marginRight={-7}
          opacity="0.2"
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
      <Stack
        align="center"
        bg="poison"
        height={16}
        overflow="hidden"
        borderRadius={20}
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/combination"
      >
        <Text color="white">Types Weaks</Text>
        <Image
          marginRight={-7}
          opacity={0.2}
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
    </SimpleGrid>
  );
};

export default NavButtons;
