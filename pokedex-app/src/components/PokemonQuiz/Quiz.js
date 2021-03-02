import React, { useState, useEffect } from "react";
import {
  Stack,
  Image,
  Input,
  Text,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";

const Quiz = ({ pokemon, nextPokemon }) => {
  const [status, setStatus] = useState("GUESSING");
  const [inputName, setInputName] = useState("");
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.replace(/ /g, "-").toLowerCase();
    setCounter((c) => c + 1);
    setStatus(name === pokemon.name ? "SUCCESS" : "FAIL");
  };

  useEffect(() => {
    setStatus("GUESSING");
    setInputName("");
    setCounter(0);
  }, [pokemon]);

  return (
    <Stack justify="center">
      <Image
        alignSelf="center"
        alt="pokemon"
        className={status === "SUCCESS" && "animate__animated animate__shakeX"}
        height={350}
        draggable="false"
        style={{
          imageRendering: `${status === "SUCCESS" ? "auto" : "pixelated"}`,
          filter: `brightness(${status === "SUCCESS" ? 1 : 0})`,
          transition: `${status === "SUCCESS" ? "filter 0.7s" : "fliter 0s"}`,
        }}
        src={pokemon.image}
        width={350}
      />
      {status === "SUCCESS" ? (
        <Stack>
          <Heading textTransform="capitalize" size="4xl" textAlign="center">
            {pokemon.name}
          </Heading>
          <Text textAlign="center">{counter} Attempts</Text>
          <Box
            as="button"
            p={2}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500,green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            onClick={nextPokemon}
          >
            Next Pokemon
          </Box>
        </Stack>
      ) : (
        <Stack>
          <form onSubmit={handleSubmit}>
            <Input
              variant="filled"
              textAlign="center"
              placeholder="Write the answer"
              type="text"
              isInvalid={status === "FAIL"}
              errorBorderColor="crimson"
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
            />
            {status === "FAIL" && (
              <Text color="primary" textAlign="center">
                Wrong Answer
              </Text>
            )}
          </form>
          <Stack isInline>
            <Button
              p={2}
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, red.400,red.600)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
              onClick={nextPokemon}
              width="50%"
            >
              Next
            </Button>
            <Button
              p={2}
              color="white"
              fontWeight="bold"
              borderRadius="md"
              bgGradient="linear(to-r, teal.500,green.500)"
              _hover={{
                bgGradient: "linear(to-r,  teal.500,teal.700)",
              }}
              onClick={handleSubmit}
              width="50%"
            >
              Try
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Quiz;
