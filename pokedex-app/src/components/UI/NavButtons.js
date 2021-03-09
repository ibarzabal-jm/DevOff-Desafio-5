import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavButtons = ({ functionOnClick }) => {
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
      name: "Types Combination",
      bgColor: "poison",
      route: "/combination",
    },
  ];
  return (
    <>
      {navButtonsArray.map((navButton) => (
        <Stack
          align="center"
          as={Link}
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
          onClick={functionOnClick !== null ? functionOnClick : undefined}
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
    </>
  );
};

export default NavButtons;
