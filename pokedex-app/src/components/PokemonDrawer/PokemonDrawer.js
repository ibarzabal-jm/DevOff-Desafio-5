import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Text,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import PokeInfo from "./PokeInfo";

const PokemonDrawer = ({ onClose, pokemon }) => {
  return (
    <Drawer isOpen placement="right" onClose={onClose} size="lg">
      <DrawerOverlay>
        <DrawerContent overflowY="auto">
          <Stack
            backgroundColor={`${pokemon.types[0]}`}
            color="white"
            padding={6}
            spacing={6}
          >
            <Stack direction="row" fontSize="2xl" justify="space-between">
              <ArrowBackIcon onClick={onClose} cursor="pointer" />
              <StarIcon />
            </Stack>
            <Stack direction="row" color="white">
              <Stack width="100%">
                <Stack direction="row" align="baseline" justify="space-between">
                  <Heading textTransform="capitalize">{pokemon.name}</Heading>
                  <Text fontWeight={600}>
                    #{pokemon.id.toString().padStart(3, "0")}
                  </Text>
                </Stack>
                <Stack direction="row">
                  {pokemon.types.map((type) => (
                    <Text
                      key={type}
                      paddingX={2}
                      paddingY={1}
                      backgroundColor="rgba(255,255,255,0.2)"
                      borderRadius={9999}
                      width="fit-content"
                      textTransform="capitalize"
                    >
                      {type}
                    </Text>
                  ))}
                </Stack>

                <Image
                  alignSelf="center"
                  height={256}
                  marginBottom={-3}
                  maxWidth={256}
                  src={pokemon.image}
                  width="100%"
                  zIndex={20}
                  className="animate__animated animate__shakeX"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            backgroundColor="white"
            borderRadius={24}
            marginTop={-16}
            padding={6}
            paddingTop={12}
            zIndex={10}
          >
            <PokeInfo pokemon={pokemon} />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default PokemonDrawer;
