import React from "react";
import { Stack } from "@chakra-ui/react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Stack
      textAlign="center"
      justify="center"
      bg="black"
      paddingY={4}
      as="footer"
    >
      <Copyright />
    </Stack>
  );
};

export default Footer;
