import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      as="nav"
      isInline
      alignItems="center"
      height={12}
      justifyContent="center"
      bg="gray.900"
      zIndex={200}
    >
      <Button colorScheme="gray.50" variant="solid" as={ReachLink} to="/home">
        PokedexApp
      </Button>
    </Stack>
  );
};

export default Navbar;
