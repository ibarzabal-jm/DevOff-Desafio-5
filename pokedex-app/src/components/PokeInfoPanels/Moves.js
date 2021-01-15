import React from "react";
import { Badge, Box, Stack, Text } from "@chakra-ui/react";

const Moves = ({ moves }) => {
  return (
    <Stack>
      <Box as="table" width="100%">
        <thead>
          <th>name</th>
          <th>power</th>
          <th>type</th>
          <th>accuracy</th>
          <th>class</th>
        </thead>
        <tbody>
          {moves.map((move) => (
            <tr key={move.name}>
              <Text align="center" as="td">
                {move.name}
              </Text>
              <Text align="center" as="td">
                {move.power}
              </Text>
              <Badge bg={move.type} as="td">
                {move.type}
              </Badge>
              <Text align="center" as="td">
                {move.accuracy}
              </Text>
              <Text align="center" as="td">
                {move.dataClass}
              </Text>
            </tr>
          ))}
        </tbody>
      </Box>
    </Stack>
  );
};

export default Moves;
