import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import CombinationContainer from "../TypesCombination/CombinationContainer";
import ToolBarPages from "../UI/ToolBarPages";

const TypeCombinationPage = () => {
  return (
    <Stack
      alignContent="center"
      bg="white"
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <ToolBarPages />

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
