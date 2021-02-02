import React, { useState } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import AddMoves from "../SearchMoves/AddMoves";
import MoveCard from "../SearchMoves/MoveCard";

const SearchMoves = () => {
  const [moves, setMoves] = useState([]);
  return (
    <Stack
      spacing={7}
      bg="white"
      rounded={30}
      padding={{ base: 1, md: 10 }}
      margin={{ base: 0, sm: 1, md: 4 }}
    >
      <Heading textAlign="center">What move are you looking for?</Heading>
      <AddMoves setMoves={setMoves} />
      <SimpleGrid display={{ md: "grid" }} columns={2} gap={3}>
        {moves.map((move, index) => (
          <MoveCard move={move} key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default SearchMoves;
