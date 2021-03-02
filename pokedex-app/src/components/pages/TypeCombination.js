import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import GoHomeButton from "../UI/GoHomeButton";
import CombinationContainer from "../TypesCombination/CombinationContainer";

const TypeCombinationPage = () => {
  return (
    <Stack
      alignContent="center"
      bg="white"
      margin={{ base: 0, sm: 1, md: 4 }}
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <GoHomeButton componentPathName="/combination" />

      <Stack spacing={0}>
        <Heading>Pokémon Type Calculator</Heading>
        <Heading size="sm" as="h6" fontWeight="normal" color="gray.500">
          Choose Types and Calculate Weaknesses
        </Heading>
      </Stack>
      <CombinationContainer />
    </Stack>
  );
};

export default TypeCombinationPage;
