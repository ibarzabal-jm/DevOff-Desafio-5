import React from "react";
import { Text, Stack, Heading, Box, Icon } from "@chakra-ui/react";
import { FaVenus, FaMars } from "react-icons/fa";

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
  const male = ((8 - gender) * 100) / 8;
  const female = (gender * 100) / 8;

  return (
    <Stack spacing={3} width="100%">
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
              Species
            </Text>
            <Text as="td" paddingY={1} width="50%" fontWeight="bold">
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
            <Text as="td" paddingY={1} width="60%" fontWeight="bold">
              Generation {gen.substring(gen.lastIndexOf("-") + 1).toUpperCase()}
            </Text>
          </tr>

          <tr>
            <Heading as="td" size="md" mt={4} textAlign="start">
              Breeding
            </Heading>
          </tr>

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
            <Stack
              as="td"
              isInline
              paddingY={1}
              spacing={2}
              width="60%"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {gender < 0 ? (
                <Text>Null</Text>
              ) : (
                <>
                  <Stack isInline alignItems="center">
                    <Icon as={FaMars} color="blue.500" w={6} h={6} />
                    <Text>{male}%</Text>
                  </Stack>
                  <Stack isInline alignItems="center">
                    <Icon as={FaVenus} color="pink.500" w={6} h={6} />
                    <Text>{female}%</Text>
                  </Stack>
                </>
              )}
            </Stack>
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
