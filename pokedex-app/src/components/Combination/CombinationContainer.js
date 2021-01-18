import React, { useState } from "react";
import {
  Box,
  color,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import ResultsCombination from "./ResultsCombination";

const CombinationContainer = () => {
  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const [firstType, setFirstType] = useState("bug");
  const [secondType, setSecondType] = useState(null);

  return (
    <Flex width="100%">
      <Flex
        alignItems="center"
        bg="gray.200"
        borderRadius={8}
        direction="row"
        justify="center"
        marginX={3}
        marginY={4}
        paddingY={4}
        w="100%"
        wrap="wrap"
      >
        <Stack w={{ base: "100%", md: "50%" }} spacing={10}>
          <Stack paddingX={2} spacing={3}>
            <Heading textAlign="center">Choose 1° Type</Heading>
            <SimpleGrid columns={3} gap={3}>
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  fontSize="0.8em"
                  key={type}
                  rounded={999}
                  textAlign="center"
                  onClick={() =>
                    type !== secondType
                      ? setFirstType(type)
                      : (setSecondType(null), setFirstType(type))
                  }
                >
                  {type}
                </Badge>
              ))}
            </SimpleGrid>
          </Stack>
          <Stack paddingX={2} spacing={3}>
            <Heading textAlign="center">Choose 2° Type</Heading>
            <SimpleGrid columns={3} gap={3}>
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  fontSize="0.8em"
                  key={type}
                  rounded={999}
                  textAlign="center"
                  onClick={() =>
                    type !== firstType
                      ? setSecondType(type)
                      : setSecondType(null)
                  }
                >
                  {type}
                </Badge>
              ))}

              <Badge
                bg="grey"
                cursor="pointer"
                fontSize="0.8em"
                rounded={999}
                textAlign="center"
                textTransform="capitalize"
                onClick={() => setSecondType(null)}
              >
                NONE
              </Badge>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Stack w={{ base: "100%", md: "50%" }}>
          <ResultsCombination firstType={firstType} secondType={secondType} />
        </Stack>
      </Flex>
    </Flex>
  );
};

export default CombinationContainer;
