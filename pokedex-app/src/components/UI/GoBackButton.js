import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const GoBackButton = () => {
  const history = useHistory();

  return (
    <ArrowBackIcon
      alignSelf="start"
      aria-label="go home"
      as="button"
      cursor="pointer"
      height={{ base: 6, md: 8 }}
      width={{ base: 6, md: 8 }}
      onClick={() => {
        history.goBack();
      }}
    />
  );
};

export default GoBackButton;
