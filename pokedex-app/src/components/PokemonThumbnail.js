import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

const PokemonThumbnail = ({ pokemon, onClick }) => {
  return (
    <Box
      color="white"
      backgroundColor={`${pokemon.types[0]}`}
      borderRadius={12}
      padding={3}
      onClick={onClick}
      cursor="pointer"
    >
      <Stack>
        <Stack direction="row" align="baseline" justifyContent="space-between">
          <Heading textTransform="capitalize" fontSize="lg">
            {pokemon.name}
          </Heading>
          <Text>{pokemon.id}</Text>
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
          <Image maxWidth="90px" width="100%" src={pokemon.image}></Image>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PokemonThumbnail;
