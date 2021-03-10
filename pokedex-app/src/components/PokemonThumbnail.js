import React, { useState } from "react";
import { Heading, Stack, Text, Image } from "@chakra-ui/react";
import PokemonDrawer from "./PokemonDrawer/PokemonDrawer";

const PokemonThumbnail = ({ pokemon }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <Stack
      color="white"
      backgroundColor={`${pokemon.types[0]}`}
      borderRadius={12}
      maxH="128px"
      maxW="318px"
      padding={2}
      onClick={() => setDrawer(true)}
      cursor="pointer"
    >
      <Stack direction="row" align="baseline" justifyContent="space-between">
        <Heading textTransform="capitalize" fontSize="lg">
          {pokemon.name}
        </Heading>
        <Text>#{pokemon.id.toString().padStart(3, "0")}</Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          {pokemon.types.map((type) => (
            <Text
              key={type}
              paddingX={2}
              paddingY={1}
              backgroundColor="rgba(255,255,255,0.2)"
              borderRadius={9999}
              width="fit-content"
            >
              {type}
            </Text>
          ))}
        </Stack>
        <Image
          alt={pokemon.name}
          height={20}
          maxHeight="80px"
          maxWidth="80px"
          src={pokemon.image}
          width={20}
        ></Image>
      </Stack>
      {drawer && (
        <PokemonDrawer pokemon={pokemon} onClose={() => setDrawer(false)} />
      )}
    </Stack>
  );
};

export default PokemonThumbnail;
