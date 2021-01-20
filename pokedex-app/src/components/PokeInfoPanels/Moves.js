import React from "react";
import { Badge, Box, Table, Tbody, Text, Tr } from "@chakra-ui/react";

const Moves = ({ moves }) => {
  return (
    <Table variant="striped" colorScheme="gray">
      <thead align="center">
        <tr>
          <th>name</th>
          <th>power</th>
          <th>type</th>
          <th>accuracy</th>
          <th>class</th>
        </tr>
      </thead>
      <Tbody>
        {moves.map((move) => (
          <Tr key={move.name}>
            <Text align="center" textTransform="capitalize" as="td">
              {move.name}
            </Text>
            <Text align="center" as="td">
              {move.power ? move.power : `-`}
            </Text>
            <Box as="td" align="center" justifyContent="center">
              <Badge bg={move.type} rounded={999} textAlign="center">
                {move.type}
              </Badge>
            </Box>
            <Text align="center" as="td">
              {move.accuracy ? move.accuracy : `-`}
            </Text>
            <Text align="center" textTransform="capitalize" as="td">
              {move.dataClass}
            </Text>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Moves;
