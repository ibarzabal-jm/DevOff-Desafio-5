import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Copyright = ({ textcolor, position }) => {
  return (
    <Text textAlign="center" textColor="white">
      {" PokdexApp  Copyright © "}
      <Link
        to="/"
        onClick={() => window.open(`https://juanmaportfolio.netlify.app/`)}
      >
        Juan Manuel Ibarzabal Salles
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Text>
  );
};

export default Copyright;
