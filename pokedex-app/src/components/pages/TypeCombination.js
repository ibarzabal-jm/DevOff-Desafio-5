import React from "react";
import Header from "../TypesCombination/Header";
import CombinationContainer from "../TypesCombination/CombinationContainer";
import { Box } from "@chakra-ui/react";

const TypeCombinationPage = () => {
  return (
    <Box bg="#fff" margin={{ base: 0, md: 4 }} padding={1} rounded={20}>
      <Header />
      <CombinationContainer />
    </Box>
  );
};

export default TypeCombinationPage;
