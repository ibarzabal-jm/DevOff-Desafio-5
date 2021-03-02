import React, { useEffect, useState } from "react";
import { Stack, Flex, Text, Badge, Heading } from "@chakra-ui/react";
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
          width={20}
          rounded={9999}
          height={20}
        >
          <Text>{firstType}</Text>
        </Flex>
        {secondType && (
          <>
            <Flex justifyContent="center">
              <Text fontSize="2em">+</Text>
            </Flex>
            <Flex
              align="center"
              bg={secondType}
              height={20}
              justifyContent="center"
              rounded={9999}
              width={20}
            >
              <Text>{secondType}</Text>
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
                    <Badge
                      bg={type}
                      key={type}
                      margin={1}
                      rounded={999}
                      textAlign="center"
                      w="100px"
                    >
                      <Text
                        fontSize="sm"
                        textTransform="capitalize"
                        fontWeight="bold"
                      >
                        {type}
                      </Text>
                    </Badge>
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
