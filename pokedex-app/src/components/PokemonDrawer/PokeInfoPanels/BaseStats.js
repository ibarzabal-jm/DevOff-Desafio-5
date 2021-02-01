import React from "react";
import { Text, Progress, Stack, Heading, Box, Badge } from "@chakra-ui/react";

const BaseStats = ({ stats, weaknesses, totalStats }) => {
  const getWeaks = (weaknesses) => {
    const weaks = Object.entries(weaknesses).filter(
      ([weak, types]) => weak > 1
    );
    return weaks;
  };

  const getResist = (weaknesses) => {
    const resist = Object.entries(weaknesses).filter(
      ([weak, types]) => weak < 1
    );
    return resist;
  };

  const renderWeaks = (value) => {
    switch (value) {
      case "4":
        return "Very Weak x4";
      case "2":
        return "Weak x2";
      case "0.5":
        return "Not Effective x1/2";
      case "0.25":
        return "Strong Against x1/4";
      case "0":
        return "Immune x0 ";
      default:
        return "Error";
    }
  };

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
    <Stack spacing={4}>
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
      <Heading size="md" textAlign="start">
        Weaknesses
      </Heading>
      <Box as="table">
        <tbody>
          {getWeaks(weaknesses).map(([weak, types]) => (
            <tr key={weak}>
              <Text as="td" width="35%">
                {renderWeaks(weak)}
              </Text>
              <Box as="td" width="65%">
                {types.map((type) => (
                  <Badge
                    key={type}
                    background={type}
                    borderRadius={9999}
                    paddingX={2}
                    marginX={1}
                  >
                    {type}
                  </Badge>
                ))}
              </Box>
            </tr>
          ))}
        </tbody>
      </Box>

      <Heading size="md" textAlign="start">
        Resistance
      </Heading>
      <Box as="table">
        <tbody>
          {getResist(weaknesses).map(([weak, types]) => (
            <tr key={weak}>
              <Text as="td" width="35%">
                {renderWeaks(weak)}
              </Text>
              <Box as="td" width="65%">
                {types.map((type) => (
                  <Badge
                    key={type}
                    background={type}
                    borderRadius={9999}
                    paddingX={2}
                    marginX={1}
                  >
                    {type}
                  </Badge>
                ))}
              </Box>
            </tr>
          ))}
        </tbody>
      </Box>
    </Stack>
  );
};

export default BaseStats;
