import React from "react";
import { Stack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <SimpleGrid
      bg="#fff"
      columns={2}
      gap={3}
      margin={{ base: 0, md: 4 }}
      padding={4}
    >
      <Stack
        align="center"
        bg="grass"
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
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
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/moves"
      >
        <Text color="white">Search Moves</Text>
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
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
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
        bg="ground"
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        as={ReachLink}
        to="/quiz"
      >
        <Text color="white">Who's that pokemon?</Text>
        <Image
          marginRight={-7}
          opacity={0.2}
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
      <Stack
        align="center"
        bg="poison"
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
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
      <Stack
        align="center"
        bg="fighting"
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        cursor="pointer"
        onClick={() =>
          window.open("https://juanmaportfolio.netlify.app/", "_blank")
        }
      >
        <Text color="white">About Me</Text>
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
