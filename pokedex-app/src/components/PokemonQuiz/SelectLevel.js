import React from "react";
import { Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

const SelectLevel = ({ setGeneration, generation }) => {
  const pagesGenerations = [
    { name: "I", min: 1, max: 151 },
    { name: "II", min: 152, max: 251 },
    { name: "III", min: 252, max: 386 },
    { name: "IV", min: 387, max: 494 },
    { name: "V", min: 495, max: 649 },
    { name: "VI", min: 650, max: 721 },
    { name: "VII", min: 722, max: 809 },
    { name: "VIII", min: 810, max: 897 },
    { name: "All Gens", min: 1, max: 897 },
  ];

  return (
    <Stack bg="gray.200" padding={3} rounded={22}>
      <Heading
        textAlign="center"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
      >
        Select Generation
      </Heading>
      <SimpleGrid
        columns={3}
        gap={3}
        borderRadius={20}
        bg="gray.200"
        padding={2}
      >
        {pagesGenerations.map((gen) => (
          <Button
            key={gen.name}
            size="md"
            bgGradient={
              gen.name !== generation.name
                ? "linear-gradient(to-r, #3a7bd5, #3a6073)"
                : "linear-gradient(to-r, crimson, crimson)"
            }
            color="white"
            _hover={{ bgGradient: "linear-gradient(to-r, crimson, crimson)" }}
            onClick={() => setGeneration(gen)}
          >
            {gen.name}
          </Button>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default SelectLevel;
