import React from "react";
import { Text } from "@chakra-ui/react";

const Copyright = ({ textcolor, position }) => {
  return (
    <Text
      cursor="pointer"
      onClick={() => window.open(`https://juanmaportfolio.netlify.app/`)}
      textAlign="center"
      textColor="white"
    >
      PokdexApp Copyright © Juan Manuel Ibarzabal Salles{" "}
      {new Date().getFullYear()}
      {"."}
    </Text>
  );
};

export default Copyright;
