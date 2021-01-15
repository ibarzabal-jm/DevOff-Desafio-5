import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack bg="blue.500">
      <Stack bg="red.500">
        <Heading textColor="white" textAlign="center" padding={3}>
          Pokémon Type Calculator
        </Heading>
      </Stack>
      <Stack borderBottom="3px solid" padding={1}>
        <Text textAlign="center" color="white">
          Choose Types and Calculate Weaknesses
        </Text>
      </Stack>
    </Stack>
  );
};

export default Header;
