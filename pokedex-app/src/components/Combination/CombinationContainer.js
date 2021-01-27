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
      margin={3}
      padding={4}
      wrap="wrap"
    >
      <Stack w={{ base: "100%", md: "50%" }} spacing={10}>
        <Stack paddingX={2} spacing={3} alignItems="center">
          <Heading textAlign="center">Choose 1° Type</Heading>
          <Flex direction="row" w="400px" wrap="wrap" justifyContent="center">
            {types.map((type) => (
              <Tag
                bg={type}
                cursor="pointer"
                key={type}
                margin="8px"
                rounded={999}
                maxW="100px"
                w="33%"
                onClick={() =>
                  type !== secondType
                    ? setFirstType(type)
                    : (setSecondType(null), setFirstType(type))
                }
              >
                <Image
                  opacity={type !== firstType && "0.2"}
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
          </Flex>
        </Stack>
        <Stack paddingX={2} spacing={3} alignItems="center">
          <Heading textAlign="center">Choose 2° Type</Heading>
          <Flex direction="row" w="400px" wrap="wrap" justifyContent="center">
            {types.map((type) => (
              <Tag
                bg={type}
                cursor="pointer"
                key={type}
                margin="8px"
                rounded={999}
                maxW="100px"
                w="33%"
                onClick={() =>
                  type !== firstType ? setSecondType(type) : setSecondType(null)
                }
              >
                <Image
                  opacity={type !== secondType && "0.2"}
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
                opacity={null !== secondType && "0.2"}
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
