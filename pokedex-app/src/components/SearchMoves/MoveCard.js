import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const MoveCard = ({ move }) => {
  const {
    accuracy,
    dataClass,
    description,
    name,
    pp,
    power,
    priority,
    effect_chance,
    effect,
    type,
  } = move;
  return (
    <Stack
      bg={type}
      borderRadius={12}
      padding={3}
      spacing={6}
      marginBottom={{ base: 4, md: 0 }}
      maxHeight="350px"
    >
      <Stack isInline justify="space-between" alignItems="center">
        <Heading color="white" textTransform="capitalize" fontSize="xl">
          {name}
        </Heading>
        <Stack isInline>
          <Image
            width={7}
            alt={dataClass}
            filter="brightness(0) invert(1)"
            src={`./assets/moveClass/${dataClass}.png`}
          ></Image>
          <Image
            width={7}
            alt={type}
            src={`./assets/pokemonTypes/${type}.png`}
          ></Image>
        </Stack>
      </Stack>
      <Stack>
        <Heading textTransform="capitalize" fontSize="md">
          Description:
        </Heading>
        <Text>{description}</Text>
      </Stack>
      <Stack>
        <Heading textTransform="capitalize" fontSize="md">
          Effect:
        </Heading>
        <Text>{effect.replace("$effect_chance", effect_chance)}</Text>
      </Stack>
      <Stack
        isInline
        alignItems="baseline"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack justify="center" textAlign="center">
          <Text textTransform="capitalize" fontWeight="bold">
            Power
          </Text>
          <Text textTransform="capitalize">{power ? power : "-"}</Text>
        </Stack>
        <Stack justify="center" textAlign="center">
          <Text textTransform="capitalize" fontWeight="bold">
            accuracy
          </Text>
          <Text textTransform="capitalize">
            {accuracy ? `${accuracy}%` : "-"}
          </Text>
        </Stack>
        <Stack justify="center" textAlign="center">
          <Text textTransform="upperCase" fontWeight="bold">
            pp
          </Text>
          <Text textTransform="capitalize">{pp}</Text>
        </Stack>
        <Stack justify="center" textAlign="center">
          <Text textTransform="capitalize" fontWeight="bold">
            priority
          </Text>
          <Text textTransform="capitalize">{priority}</Text>
        </Stack>
        <Stack justify="center" textAlign="center">
          <Text textTransform="capitalize" fontWeight="bold">
            Category
          </Text>
          <Text textTransform="capitalize">{dataClass}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MoveCard;
