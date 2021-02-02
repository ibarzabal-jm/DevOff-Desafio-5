import React, { useState, useEffect } from "react";
import { Stack, Image, Button, Input, Text, Heading } from "@chakra-ui/react";

const Quiz = ({ pokemon, nextPokemon }) => {
  const [status, setStatus] = useState("GUESSING");
  const [inputName, setInputName] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName;
    setCounter(counter + 1);
    setStatus(name === pokemon.name ? "SUCCESS" : "FAIL");
  };

  useEffect(() => {
    setStatus("GUESSING");
    setInputName(null);
    setCounter(0);
  }, [pokemon]);

  return (
    <Stack alignItems="center">
      <Image
        width={512}
        height={512}
        style={{
          imageRendering: "pixelated",
          filter: `brightness(${status === "SUCCESS" ? 1 : 0})`,
          transition: `${status === "SUCCESS" ? "filter 0.7s" : "fliter 0s"}`,
        }}
        src={pokemon.image}
      />
      {status === "SUCCESS" ? (
        <Stack>
          <Heading textTransform="capitalize" size="4xl">
            {pokemon.name}
          </Heading>
          <Text textAlign="center">{counter} Attempts</Text>
          <Button onClick={nextPokemon}>Play Again</Button>
        </Stack>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Guessing Pokémon"
            type="text"
            isInvalid={status === "FAIL"}
            errorBorderColor="crimson"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          {status === "FAIL" && <Text>Wrong</Text>}
        </form>
      )}
    </Stack>
  );
};

export default Quiz;
