import React from "react";
import { Text, Stack, Table, Tbody, Tr } from "@chakra-ui/react";

const Description = ({ description }) => {
  return (
    <Stack>
      <Table variant="striped" colorScheme="gray" width="100%">
        <Tbody>
          {description.map((genDesc, index) => (
            <Tr key={index}>
              <Text
                as="td"
                paddingY={4}
                align="center"
                width="40%"
                textTransform="capitalize"
                fontWeight="bold"
              >
                {genDesc.version.name}
              </Text>
              <Text as="td" paddingY={4}>
                {genDesc.flavor_text.replace(/\s+/g, " ")}
              </Text>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default Description;
