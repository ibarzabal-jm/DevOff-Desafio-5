import React from "react";
import { Stack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavButtons = () => {
  const navButtonsArray = [
    {
      name: "Pokédex",
      bgColor: "grass",
      route: "/pokedex",
    },
    {
      name: "Search Moves",
      bgColor: "fire",
      route: "/moves",
    },
    {
      name: "Search Pokémon",
      bgColor: "water",
      route: "/search",
    },
    {
      name: "Who's that Pokémon?",
      bgColor: "ground",
      route: "/quiz",
    },
    {
      name: "Types Weaks?",
      bgColor: "poison",
      route: "/combination",
    },
  ];
  return (
    <SimpleGrid bg="#fff" columns={2} gap={3} paddingX={4}>
      {navButtonsArray.map((navButton) => (
        <Stack
          align="center"
          as={ReachLink}
          bg={navButton.bgColor}
          borderRadius={20}
          boxShadow="0px 5px  3px #ccc"
          height={16}
          isInline
          justifyContent="space-between"
          key={navButton.name}
          overflow="hidden"
          padding={3}
          _hover={{ opacity: 0.8 }}
          to={navButton.route}
        >
          <Text color="white">{navButton.name}</Text>
          <Image
            alt="pokeball"
            marginRight={-7}
            opacity="0.2"
            src="../assets/ui/pokeball.svg"
            width={20}
          />
        </Stack>
      ))}

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
          alt="pokeball"
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
