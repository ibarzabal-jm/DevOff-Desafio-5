import React from "react";
import { Image, Tag, TagLabel } from "@chakra-ui/react";

const TypeButton = ({ type, selectedType, changeSelectedType }) => {
  return (
    <Tag
      as="button"
      bg={type !== null ? type : "grey"}
      cursor="pointer"
      margin={1}
      rounded={999}
      value={type}
      w="90px"
      onClick={() => changeSelectedType(type)}
    >
      <Image
        mr={3}
        ml={-1}
        src="../assets/ui/pokeball.svg"
        opacity={type !== selectedType ? "0.1" : "1"}
        width={4}
      />
      <TagLabel textTransform="capitalize" fontWeight="bold">
        {type === null ? "None" : type}
      </TagLabel>
    </Tag>
  );
};

export default TypeButton;
