import React from "react";
import { Heading, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack margin={{ base: 3, md: 5 }} padding={{ base: 0, md: 1 }}>
      <Heading as="h3">Pokémon Type Calculator</Heading>
      <Heading size="sm" as="h6" fontWeight="normal" color="gray.500">
        Choose Types and Calculate Weaknesses
      </Heading>
    </Stack>
  );
};

export default Header;
