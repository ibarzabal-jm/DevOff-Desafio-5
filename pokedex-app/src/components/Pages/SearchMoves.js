import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import AddMoves from "../SearchMoves/AddMoves";
import MoveCard from "../SearchMoves/MoveCard";
import ToolBarPages from "../UI/ToolBarPages";

const SearchMoves = () => {
  const [moves, setMoves] = useState([]);
  return (
    <Stack
      alignContent="center"
      bg="white"
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <ToolBarPages />
      <Heading textAlign="center">What move are you looking for?</Heading>
      <AddMoves setMoves={setMoves} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        {moves.map((move, index) => (
          <MoveCard move={move} key={index} />
        ))}
      </SimpleGrid>
      <Stack
        flexGrow={1}
        background="url(../assets/ui/pokeballgray.svg) no-repeat center"
      ></Stack>
    </Stack>
  );
};

export default SearchMoves;
