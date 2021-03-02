import React from "react";
import Header from "../TypesCombination/Header";
import CombinationContainer from "../TypesCombination/CombinationContainer";
import { Stack } from "@chakra-ui/react";

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
      <Header />
      <CombinationContainer />
    </Stack>
  );
};

export default TypeCombinationPage;
