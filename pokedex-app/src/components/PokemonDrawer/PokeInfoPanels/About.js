import React from "react";
import { Text, Stack, Heading, Box } from "@chakra-ui/react";

const About = ({
  abilities,
  eggs,
  gen,
  genera,
  gender,
  hatch,
  height,
  weight,
}) => {
  return (
    <Stack spacing={3}>
      <Box as="table" width="100%">
        <tbody>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              Species
            </Text>
            <Text as="td" paddingY={1} width="60%" fontWeight="bold">
              {genera}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              Height
            </Text>
            <Text as="td" paddingY={1} width="60%" fontWeight="bold">
              {` ${height} m`}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              weight
            </Text>
            <Text as="td" paddingY={1} width="60%" fontWeight="bold">
              {`${weight} kg`}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              abilities
            </Text>
            <Text
              as="td"
              paddingY={1}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {abilities.map((ability) => `${ability} `)}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              first appearance
            </Text>
            <Text
              as="td"
              paddingY={1}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {gen}
            </Text>
          </tr>
        </tbody>
      </Box>
      <Heading size="md">Breeding</Heading>
      <Box as="table">
        <tbody>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              Gender
            </Text>
            <Text
              as="td"
              paddingY={1}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {gender < 0
                ? "Null"
                : `${(gender * 100) / 8}% female, ${
                    ((8 - gender) * 100) / 8
                  }% male`}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              Egg Groups
            </Text>
            <Text
              as="td"
              paddingY={1}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {eggs.map((egg) => `${egg} `)}
            </Text>
          </tr>
          <tr>
            <Text
              as="td"
              color="gray.500"
              paddingY={1}
              width="40%"
              textTransform="capitalize"
            >
              Hatch counter
            </Text>
            <Text
              as="td"
              paddingY={1}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {`${(hatch + 1) * 255} steps`}
            </Text>
          </tr>
        </tbody>
      </Box>
    </Stack>
  );
};

export default About;
