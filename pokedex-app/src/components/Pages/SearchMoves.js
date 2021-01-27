import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import AddMoves from "../Moves/AddMoves";
import MoveCard from "../Moves/MoveCard";

const SearchMoves = () => {
  const [moves, setMoves] = useState([]);
  return (
    <Stack spacing={7} padding={10} bg="gray.200" rounded={30} minH="50vh">
      <Heading textAlign="center">What move are you looking for?</Heading>
      <AddMoves setMoves={setMoves} />
      <SimpleGrid columns={2} gap={3}>
        {moves.map((move, index) => (
          <MoveCard move={move} key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default SearchMoves;
