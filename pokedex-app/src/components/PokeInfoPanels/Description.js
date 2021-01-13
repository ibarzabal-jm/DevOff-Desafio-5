import React from "react";
import { Text, Stack, Box } from "@chakra-ui/react";

const Description = ({ description }) => {
  return (
    <Stack>
      <Box as="table">
        <tbody>
          {description.map((genDesc, index) => (
            <tr key={index}>
              <Text
                as="td"
                paddingY={4}
                align="justify"
                width="40%"
                textTransform="capitalize"
                fontWeight="bold"
              >
                {genDesc.version.name}
              </Text>
              <Text as="td" paddingY={4} align="justify">
                {genDesc.flavor_text}
              </Text>
            </tr>
          ))}
        </tbody>
      </Box>
    </Stack>
  );
};

export default Description;
