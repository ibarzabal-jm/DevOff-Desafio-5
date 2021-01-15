import React from "react";
import { Stack } from "@chakra-ui/react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Stack isInline textAlign="center" justify="center" bg="black" paddingY={4}>
      <Copyright />
    </Stack>
  );
};

export default Footer;
