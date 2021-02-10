import React, { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Image,
  Tag,
  TagLabel,
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
    <Flex
      alignItems="center"
      bg="gray.100"
      borderRadius={8}
      direction="row"
      justify="center"
      margin={{ base: 3, md: 5 }}
      padding={{ base: 0, md: 1 }}
      wrap="wrap"
    >
      <Stack w={{ base: "100%", md: "50%" }} spacing={4}>
        <Heading textAlign="center">Choose Types</Heading>
        <Flex direction="row" wrap="wrap" justifyContent="center">
          {types.map((type) => (
            <Tag
              bg={type}
              cursor="pointer"
              key={type}
              margin={{ base: "3px", sm: "5px", md: "8px" }}
              rounded={999}
              maxW="100px"
              w="32%"
              onClick={() =>
                type !== firstType
                  ? setSecondType(type)
                  : secondType !== null &&
                    (setFirstType(secondType), setSecondType(null))
              }
            >
              <Image
                opacity={secondType !== type && firstType !== type && "0.1"}
                maxWidth="100px"
                width={4}
                src="../assets/ui/pokeball.svg"
                ml={-1}
                mr={3}
              />
              <TagLabel textTransform="capitalize" fontWeight="bold">
                {type}
              </TagLabel>
            </Tag>
          ))}
          <Tag
            bg="grey"
            cursor="pointer"
            key="none"
            margin="8px"
            rounded={999}
            maxW="100px"
            w="33%"
            onClick={() => setSecondType(null)}
          >
            <Image
              opacity={null !== secondType && "0.1"}
              maxWidth="100px"
              width={4}
              src="../assets/ui/pokeball.svg"
              ml={-1}
              mr={3}
            />
            <TagLabel textTransform="capitalize" fontWeight="bold">
              None
            </TagLabel>
          </Tag>
        </Flex>
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
  );
};

export default CombinationContainer;
