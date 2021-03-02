import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const GoHomeButton = ({ componentPathName }) => {
  const { pathname: actualPathName } = useLocation();
  const history = useHistory();
  return (
    componentPathName === actualPathName && (
      <ArrowBackIcon
        alignSelf="start"
        aria-label="go home"
        as="button"
        cursor="pointer"
        height={{ base: 6, md: 8 }}
        width={{ base: 6, md: 8 }}
        onClick={() => {
          history.push("/home");
        }}
      />
    )
  );
};

export default GoHomeButton;
