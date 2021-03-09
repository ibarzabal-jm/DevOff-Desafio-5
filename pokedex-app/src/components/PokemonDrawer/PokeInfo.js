import React from "react";
import {
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useFetchPokeInfo } from "../../hooks/useFetchPokeInfo";

import About from "./PokeInfoPanels/About";
import BaseStats from "./PokeInfoPanels/BaseStats";
import Description from "./PokeInfoPanels/Description";
import Moves from "./PokeInfoPanels/Moves";

const PokeInfo = ({ pokemon: { types, id } }) => {
  const { data, loading } = useFetchPokeInfo(id);

  const tabList = ["About", "Base Stats", "Description", "Moves"];

  return (
    <Tabs variant="unstyled" align="center">
      <TabList>
        {tabList.map((tabName) => (
          <Tab
            key={tabName}
            _selected={{ color: types[0], borderBottom: "2px solid" }}
          >
            {tabName}
          </Tab>
        ))}
      </TabList>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={types[0]}
          size="xl"
        />
      ) : (
        <TabPanels align="center">
          <TabPanel>
            <About
              abilities={data.abilities}
              eggs={data.eggs}
              gen={data.gen}
              genera={data.genera}
              gender={data.gender}
              hatch={data.hatch}
              height={data.height}
              weaknesses={data.weaknesses}
              weight={data.weight}
            />
          </TabPanel>
          <TabPanel>
            <BaseStats
              stats={data.stats}
              totalStats={data.totalStats}
              weaknesses={data.weaknesses}
            />
          </TabPanel>
          <TabPanel>
            <Description description={data.description} />
          </TabPanel>

          <TabPanel paddingX={0}>
            {data.moves.length > 0 ? (
              <Moves moves={data.moves} />
            ) : (
              <Text color="crimson" align="center">
                No data from PokeApi
              </Text>
            )}
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
};

export default PokeInfo;
