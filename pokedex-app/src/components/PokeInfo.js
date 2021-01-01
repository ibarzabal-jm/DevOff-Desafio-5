import React from "react";
import {
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";

export const PokeInfo = ({ pokemon: { types, id, weight } }) => {
  return (
    <Tabs variant="unstyled" align="center">
      <TabList marginBottom={3}>
        <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
          About
        </Tab>
        <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
          Base Stats
        </Tab>
        <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
          Evolution
        </Tab>
        <Tab _selected={{ color: types[0], borderBottom: "2px solid" }}>
          Moves
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>weight:{weight}</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
