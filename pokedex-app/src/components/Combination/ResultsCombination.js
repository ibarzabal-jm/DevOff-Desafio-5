import React, { useEffect, useState } from "react";
import {
  Stack,
  Flex,
  Text,
  Badge,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { getWeaknesses } from "../../helpers/getWeaknesses";

const ResultsCombination = ({ firstType, secondType }) => {
  const values = [4, 2, 1, 0.5, 0.25, 0];
  const [combination, setCombination] = useState({});

  useEffect(() => {
    if (secondType === null) {
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
    <Stack>
      <Stack isInline justify="center" alignItems="baseline">
        <Flex
          align="center"
          justifyContent="center"
          bg={firstType}
          width={20}
          rounded={9999}
          height={20}
        >
          <Text textTransform="capitalize" fontWeight="bold">
            {firstType}
          </Text>
        </Flex>
        {secondType && (
          <>
            <Flex justifyContent="center">
              <Text fontSize="2rem" fontWeight="bold">
                +
              </Text>
            </Flex>
            <Flex
              align="center"
              justifyContent="center"
              width={20}
              rounded={9999}
              height={20}
              bg={secondType}
            >
              <Text textTransform="capitalize" fontWeight="bold">
                {secondType}
              </Text>
            </Flex>
          </>
        )}
      </Stack>
      <Stack justify="center" alignItems="center">
        {values.map(
          (value) =>
            combination[value] && (
              <Stack key={value}>
                <Text textAlign="center" fontWeight="bold">
                  {renderWeaks(value)}
                </Text>
                <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                  {combination[value].map((type) => (
                    <GridItem>
                      <Badge
                        rounded={999}
                        width={20}
                        textAlign="center"
                        key={type}
                        bg={type}
                      >
                        <Text>{type}</Text>
                      </Badge>
                    </GridItem>
                  ))}
                </Grid>
              </Stack>
            )
        )}
      </Stack>
    </Stack>
  );
};

export default ResultsCombination;
