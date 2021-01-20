import React, { useState } from "react";
import { Box, Flex, Stack,  Heading, Badge } from "@chakra-ui/react";
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
          <Stack paddingX={2} spacing={3} alignItems="center">
            <Heading textAlign="center">Choose 1° Type</Heading>
            <Flex direction="row" w="400px" wrap="wrap" justifyContent="center">
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  key={type}
                  margin="8px"
                  rounded={999}
                  textAlign="center"
                  maxW="100px"
                  w="33%"
                  onClick={() =>
                    type !== secondType
                      ? setFirstType(type)
                      : (setSecondType(null), setFirstType(type))
                  }
                >
                  {type}
                </Badge>
              ))}
            </Flex>
          </Stack>
          <Stack paddingX={2} spacing={3} alignItems="center">
            <Heading textAlign="center">Choose 2° Type</Heading>
            <Flex direction="row" w="400px" wrap="wrap" justifyContent="center">
              {types.map((type) => (
                <Badge
                  bg={type}
                  cursor="pointer"
                  key={type}
                  margin="8px"
                  rounded={999}
                  textAlign="center"
                  maxW="100px"
                  w="33%"
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
                maxW="100px"
                w="33%"
                textAlign="center"
                textTransform="capitalize"
                onClick={() => setSecondType(null)}
              >
                NONE
              </Badge>
            </Flex>
          </Stack>
        </Stack>

        <Box
          marginTop={{ base: "4rem", md: "0px" }}
          w={{ base: "100%", md: "50%" }}
        >
          <ResultsCombination
            w={{ base: "100%", md: "50%" }}
            firstType={firstType}
            secondType={secondType}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CombinationContainer;
