import React, { useState } from "react";
import { motion } from "framer-motion";

import { SimpleGrid, Heading, Stack, Button, Spinner } from "@chakra-ui/react";

import PokemonThumbnail from "../PokemonThumbnail";
import { useFetchPokedex } from "../../hooks/useFetchPokedex";
import ToolBarPages from "../UI/ToolBarPages";

const Pokedex = () => {
  const [page, setPage] = useState(0);

  const pagesGenerations = [
    { name: "I", page: 0 },
    { name: "II", page: 15 },
    { name: "III", page: 25 },
    { name: "IV", page: 38 },
    { name: "V", page: 49 },
    { name: "VI", page: 65 },
    { name: "VII", page: 72 },
    { name: "VIII", page: 81 },
    // { name: "Variants", page: 89 },
    // { name: "Megas", page: 93 },
    // { name: "Gmax", page: 108 },
  ];

  const { pokemons, loading } = useFetchPokedex(page);

  return (
    <Stack
      alignContent="center"
      bg="gray.200"
      paddingX={{ base: 1, sm: 2, md: 4 }}
      paddingY={{ base: 0, md: 3 }}
      paddingBottom={2}
      rounded={20}
      spacing={2}
    >
      <ToolBarPages />
      <Heading fontSize="4xl" alignSelf="flex-start">
        Pokedex
      </Heading>

      {loading ? (
        <Spinner
          alignSelf="center"
          thickness="4px"
          speed="0.5s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      ) : (
        <SimpleGrid gap={3} columns={2} w="100%">
          {pokemons?.map((pokemon, index) => (
            <motion.div
              animate="visible"
              key={pokemon.name}
              custom={index}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 150 },
                visible: (index) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.05,
                  },
                }),
              }}
            >
              <PokemonThumbnail pokemon={pokemon} />
            </motion.div>
          ))}
        </SimpleGrid>
      )}
      <Stack isInline justify="center" alignItems="center">
        {page > 0 && (
          <Button
            bg="primary"
            color="white"
            _hover={{ bgGradient: "linear-gradient(to-r, crimson, crimson)" }}
            onClick={() => setPage(page - 1)}
          >
            Prev Page
          </Button>
        )}
        {pagesGenerations.map(({ name, page }) => (
          <Button
            display={{ base: "none", md: "inline-block" }}
            key={name}
            size="md"
            onClick={() => setPage(page)}
            bg="secondary"
            color="white"
            _hover={{ bgGradient: "linear-gradient(to-r, crimson, crimson)" }}
          >
            {name}
          </Button>
        ))}
        {page < 111 && (
          <Button
            bg="primary"
            color="white"
            _hover={{ bgGradient: "linear-gradient(to-r, crimson, crimson)" }}
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Pokedex;
