import React, { useState, useEffect } from "react";
import {
  Stack,
  Image,
  Input,
  Text,
  Heading,
  Box,
  InputGroup,
  InputRightElement,
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
    <Stack alignItems="center">
      <Image
        width={350}
        height={350}
        alt="pokemon"
        draggable="false"
        style={{
          imageRendering: "pixelated",
          filter: `brightness(${status === "SUCCESS" ? 1 : 0})`,
          transition: `${status === "SUCCESS" ? "filter 0.7s" : "fliter 0s"}`,
        }}
        src={pokemon.image}
        className={status === "SUCCESS" && "animate__animated animate__shakeX"}
      />
      {status === "SUCCESS" ? (
        <Stack>
          <Heading textTransform="capitalize" size="4xl">
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
            <InputGroup>
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
              <InputRightElement>
                <Button
                  color="white"
                  fontWeight="bold"
                  borderRadius="md"
                  bgGradient="linear(to-r, teal.500,green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  onClick={handleSubmit}
                >
                  Try
                </Button>
              </InputRightElement>
            </InputGroup>
            {status === "FAIL" && <Text textAlign="center">Wrong</Text>}
          </form>
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
      )}
    </Stack>
  );
};

export default Quiz;
