import React, { useState } from "react";
import { Badge, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import ResultsCombination from "./ResultsCombination";

const CombinationContent = () => {
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
    <Stack width="100%">
      <Stack
        isInline
        bg="gray.200"
        marginX={3}
        marginY={4}
        paddingY={4}
        borderRadius={8}
        spacing={3}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Stack flexGrow="1">
          <Stack>
            <Heading textAlign="center">Choose 1° Type</Heading>
            <SimpleGrid columns={3} gap={3} padding={3}>
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  fontSize="0.8em"
                  rounded={999}
                  textAlign="center"
                  onClick={() => setFirstType(type)}
                >
                  {type}
                </Badge>
              ))}
            </SimpleGrid>
          </Stack>
          <Stack>
            <Heading textAlign="center">Choose 2° Type</Heading>
            <SimpleGrid columns={3} gap={3} padding={3}>
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  fontSize="0.8em"
                  key={type}
                  rounded={999}
                  textAlign="center"
                  textTransform="capitalize"
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
                None
              </Badge>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Stack alignItems="center" justify="center" flexGrow="1">
          <Heading textAlign="center">Results Combination:</Heading>
          <ResultsCombination firstType={firstType} secondType={secondType} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CombinationContent;
