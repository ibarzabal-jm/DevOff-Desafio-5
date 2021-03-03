import React, { useState } from "react";
import { Stack, Heading, Flex } from "@chakra-ui/react";
import Results from "./Results";
import TypeButton from "./TypeButton";

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

  const handleChangeFirstType = (type) => {
    if (type !== secondType) {
      setFirstType(type);
    } else {
      setFirstType(type);
      setSecondType(null);
    }
  };

  const handleChangeSecondType = (type) => {
    if (type !== firstType) {
      setSecondType(type);
    } else {
      setFirstType(type);
      setSecondType(null);
    }
  };

  return (
    <Stack
      bg="gray.100"
      borderRadius={20}
      align="center"
      alignItems="center"
      justify="center"
      spacing={2}
      paddingY={2}
    >
      <Stack direction={{ base: "column", md: "row" }} spacing={2}>
        <Stack>
          <Heading fontSize="lg" textAlign="center">
            Primary Type
          </Heading>
          <Flex direction="row" wrap="wrap" justifyContent="center">
            {types.map((type) => (
              <TypeButton
                changeSelectedType={handleChangeFirstType}
                key={type}
                selectedType={firstType}
                type={type}
              />
            ))}
          </Flex>
        </Stack>

        <Stack>
          <Heading fontSize="lg" textAlign="center">
            Secondary Type
          </Heading>
          <Flex direction="row" wrap="wrap" justifyContent="center">
            {types.map((type) => (
              <TypeButton
                changeSelectedType={handleChangeSecondType}
                key={type}
                selectedType={secondType}
                type={type}
              />
            ))}
            <TypeButton
              changeSelectedType={handleChangeSecondType}
              type={null}
              key={"null"}
              selectedType={secondType}
            />
          </Flex>
        </Stack>
      </Stack>

      <Results firstType={firstType} secondType={secondType} />
    </Stack>
  );
};

export default CombinationContainer;
