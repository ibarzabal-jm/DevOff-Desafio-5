import React, { useEffect, useState } from "react";
import { Badge, Box, Stack, Table, Tbody, Text, Tr } from "@chakra-ui/react";
import {
  sortTableAscending,
  sortTableDescending,
} from "../../../helpers/sortTableMoves";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

const Moves = ({ moves }) => {
  const headers = ["name", "power", "type", "accuracy", "class"];

  const [sortedMoves, setSortedMoves] = useState(moves);
  const [sorted, setSorted] = useState("name");
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    setSortedMoves(
      ascending
        ? sortTableAscending(moves, sorted)
        : sortTableDescending(moves, sorted)
    );
  }, [sorted, moves, ascending]);

  const handleSort = (sorting) => {
    if (sorting === sorted) {
      setAscending(!ascending);
    } else {
      setAscending(true);
      setSorted(sorting);
    }
  };

  return (
    <Table variant="striped" align="center" colorScheme="gray" size="sm">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} onClick={() => handleSort(header)}>
              <Stack
                isInline
                justify="center"
                cursor="pointer"
                align="center"
                spacing={0}
                width="100%"
              >
                <Text>{header}</Text>

                {header === sorted &&
                  (ascending ? (
                    <TriangleDownIcon
                      aria-label="sorted descending"
                      h={2}
                      w={2}
                    />
                  ) : (
                    <TriangleUpIcon aria-label="sorted ascending" h={2} w={2} />
                  ))}
              </Stack>
            </th>
          ))}
        </tr>
      </thead>
      <Tbody>
        {sortedMoves.map((move) => (
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
