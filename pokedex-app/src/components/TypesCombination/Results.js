import React, { useEffect, useState } from "react";
import { Stack, Flex, Text, Box, Heading } from "@chakra-ui/react";
import { getWeaknesses } from "../../api/getWeaknesses";

const ResultsCombination = ({ firstType, secondType }) => {
  const values = [4, 2, 1, 0.5, 0.25, 0];
  const [combination, setCombination] = useState({});

  useEffect(() => {
    if (secondType === null || firstType === secondType) {
      setCombination(getWeaknesses([firstType]));
    } else {
      setCombination(getWeaknesses([firstType, secondType]));
    }
  }, [firstType, secondType]);

  const renderWeaks = (value) => {
    switch (value) {
      case 4:
        return "Very Weak x4";
      case 2:
        return "Weak x2";
      case 1:
        return "Normal x1";
      case 0.5:
        return "Not Effective x1/2";
      case 0.25:
        return "Strong Against x1/4";
      case 0:
        return "Immune x0 ";
      default:
        return "Error";
    }
  };

  return (
    <Stack spacing={4} marginBottom={{ base: 2, md: 0 }}>
      <Heading textAlign="center">Weaks Combination:</Heading>

      <Stack
        isInline
        justify="center"
        alignItems="baseline"
        textTransform="capitalize"
        fontSize="lg"
        fontWeight="bold"
      >
        <Flex
          align="center"
          justifyContent="center"
          bg={firstType}
          border="3px solid black"
          width={20}
          rounded={9999}
          height={20}
        >
          <Text
            color="white"
            textShadow="0 1px 0 black, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)"
          >
            {firstType}
          </Text>
        </Flex>
        {secondType && (
          <>
            <Flex justifyContent="center">
              <Text fontSize="2em">+</Text>
            </Flex>
            <Flex
              align="center"
              bg={secondType}
              border="3px solid black"
              color="white"
              height={20}
              justifyContent="center"
              rounded={9999}
              width={20}
            >
              <Text textShadow="0 1px 0 black, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)">
                {secondType}
              </Text>
            </Flex>
          </>
        )}
      </Stack>

      <Flex direction="column">
        {values.map(
          (value) =>
            combination[value] && (
              <Stack
                alignItems="center"
                justifyItems="center"
                key={value}
                spacing={0}
              >
                <Text textAlign="center" fontSize="md" fontWeight="bold">
                  {renderWeaks(value)}
                </Text>
                <Flex direction="row" wrap="wrap" justifyContent="center">
                  {combination[value].map((type) => (
                    <Box
                      bg={type}
                      key={type}
                      border="1px"
                      margin={1}
                      rounded={99}
                      textAlign="center"
                      w="100px"
                    >
                      <Text
                        color="white"
                        textShadow="0 1px 0 black, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)"
                        fontSize="sm"
                        textTransform="capitalize"
                        fontWeight="bold"
                      >
                        {type}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Stack>
            )
        )}
      </Flex>
    </Stack>
  );
};

export default ResultsCombination;
