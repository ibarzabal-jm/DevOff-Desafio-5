import React from "react";
import {
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Progress,
  Stack,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useFetchPokeInfo } from "../hooks/useFetchPokeInfo";
import { getWeaknesses } from "../helpers/getWeaknesses";

export const PokeInfo = ({ pokemon: { types, id } }) => {
  const { data, loading } = useFetchPokeInfo(id);

  getWeaknesses(types);

  const {
    abilities,
    description,
    eggs,
    gen,
    genera,
    gender,
    hatch,
    height,
    stats,
    totalStats,
    weight,
  } = data;

  const valueColor = (value) => {
    if (value <= 50) {
      return "red";
    } else {
      if (value <= 100) {
        return "yellow";
      } else {
        return "green";
      }
    }
  };

  return (
    <>
      {loading ? (
        "Cargando..."
      ) : (
        <Tabs variant="unstyled" align="center">
          <TabList>
            <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
              About
            </Tab>
            <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
              Base Stats
            </Tab>
            <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
              Description
            </Tab>
            <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
              Evolution
            </Tab>
            <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
              Moves
            </Tab>
          </TabList>
          <TabPanels align="start" paddingX={0}>
            <TabPanel>
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
                <Heading size="lg">Breeding</Heading>
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
            </TabPanel>
            <TabPanel paddingX={0}>
              <Box as="table" width="100%">
                <tbody>
                  {Object.entries(stats).map(([title, value]) => (
                    <tr key={title}>
                      <Text
                        as="td"
                        color="gray.500"
                        paddingY={1}
                        width="40%"
                        textTransform="capitalize"
                      >
                        {title}
                      </Text>
                      <Text as="td" paddingY={1} width="15%">
                        {value}
                      </Text>
                      <Box as="td" paddingY={1} width="45%">
                        <Progress
                          colorScheme={valueColor(value)}
                          size="xs"
                          value={value}
                          max={200}
                        />
                      </Box>
                    </tr>
                  ))}
                  <tr>
                    <Text
                      as="td"
                      color="gray.500"
                      paddingY={1}
                      width="40%"
                      textTransform="capitalize"
                    >
                      Total
                    </Text>
                    <Text as="td" paddingY={1} width="15%">
                      {totalStats}
                    </Text>
                    <Box as="td" paddingY={1} width="45%">
                      <Progress
                        colorScheme={totalStats >= 400 ? "green" : "red"}
                        size="xs"
                        value={totalStats}
                        max={750}
                      />
                    </Box>
                  </tr>
                </tbody>
              </Box>
            </TabPanel>
            <TabPanel>
              <Stack spacing={3}>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};
