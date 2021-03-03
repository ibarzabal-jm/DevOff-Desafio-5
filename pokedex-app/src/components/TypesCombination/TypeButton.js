import React from "react";
import { Tag, TagLabel, Box } from "@chakra-ui/react";

const TypeButton = ({ type, selectedType, changeSelectedType }) => {
  return (
    <Tag
      as="button"
      bg="white"
      border={type === selectedType ? "2px solid" : "1px solid #ccc"}
      cursor="pointer"
      margin={1}
      rounded={20}
      value={type}
      w="95px"
      onClick={() => changeSelectedType(type)}
    >
      <Box
        rounded={99999}
        bg={type !== null ? type : "grey"}
        mr={1}
        ml={-1}
        w={4}
        h={4}
      ></Box>
      <TagLabel textTransform="capitalize" fontWeight="bold">
        {type === null ? "None" : type}
      </TagLabel>
    </Tag>
  );
};

export default TypeButton;
