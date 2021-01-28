import { Text } from "@chakra-ui/react";
import React from "react";

const Repositorio = () => {
  return (
    <Text
      onClick={() =>
        window.open(
          `https://github.com/ibarzabal-jm/React-Pokedex-DevOff-Desafio-5`
        )
      }
      cursor="pointer"
      color="white"
    >
      Repositorio
    </Text>
  );
};

export default Repositorio;
