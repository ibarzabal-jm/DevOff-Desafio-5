import React from "react";
import { Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

const SelectLevel = ({ setMin, setMax }) => {
  const pagesGenerations = [
    { name: "I", min: 1, max: 151 },
    { name: "II", min: 152, max: 251 },
    { name: "III", min: 252, max: 386 },
    { name: "IV", min: 387, max: 494 },
    { name: "V", min: 495, max: 649 },
    { name: "VI", min: 650, max: 721 },
    { name: "VII", min: 722, max: 809 },
    { name: "VIII", min: 810, max: 897 },
  ];

  return (
    <Stack bg="gray.200" margin={2} padding={4} rounded={22}>
      <Heading
        textAlign="center"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
      >
        {" "}
        Select Generation
      </Heading>
      <SimpleGrid
        columns={3}
        gap={3}
        borderRadius={20}
        bg="gray.200"
        padding={2}
      >
        {pagesGenerations.map(({ name, min, max }) => (
          <Button
            key={name}
            size="md"
            bgGradient="linear-gradient(to-r, #3a7bd5, #3a6073);"
            color="white"
            _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}
            onClick={() => {
              setMin(min);
              setMax(max);
            }}
          >
            {name}
          </Button>
        ))}
        <Button
          bg="primary"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={() => {
            setMin(1);
            setMax(897);
          }}
        >
          All Gens
        </Button>
      </SimpleGrid>
    </Stack>
  );
};

export default SelectLevel;
