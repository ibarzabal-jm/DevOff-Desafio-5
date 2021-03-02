import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import AddMoves from "../SearchMoves/AddMoves";
import MoveCard from "../SearchMoves/MoveCard";
import GoHomeButton from "../UI/GoHomeButton";

const SearchMoves = () => {
  const [moves, setMoves] = useState([]);
  return (
    <Stack
      alignContent="center"
      bg="white"
      margin={{ base: 0, sm: 1, md: 4 }}
      padding={{ base: 0, md: 4 }}
      rounded={30}
      spacing={3}
    >
      <GoHomeButton componentPathName="/moves" />
      <Heading>What move are you looking for?</Heading>
      <AddMoves setMoves={setMoves} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        {moves.map((move, index) => (
          <MoveCard move={move} key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default SearchMoves;
