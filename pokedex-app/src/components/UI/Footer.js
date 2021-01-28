import React from "react";
import { Stack } from "@chakra-ui/react";
import Copyright from "./Copyright";
import Repositorio from "./Repositorio";

const Footer = () => {
  return (
    <Stack textAlign="center" justify="center" bg="black" paddingY={4}>
      <Copyright />
      <Repositorio />
    </Stack>
  );
};

export default Footer;
