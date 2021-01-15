import React, { useEffect, useState } from "react";
import { SimpleGrid, Heading, Stack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

import api from "../../helpers/api";
import PokemonThumbnail from "../PokemonThumbnail";
import PokemonDrawer from "../PokemonDrawer";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    api.list(page).then((newPokemons) => setPokemons(newPokemons));
  }, [page]);

  return (
    <Stack padding={5} spacing={5}>
      <Heading fontSize="4xl" alignSelf="flex-start">
        Pokedex
      </Heading>

      <SimpleGrid gap={3} columns={2} padding={3}>
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
            <PokemonThumbnail
              pokemon={pokemon}
              onClick={() => setSelected(pokemon)}
            />
          </motion.div>
        ))}
      </SimpleGrid>
      <Stack isInline alignSelf="center">
        {page > 0 && (
          <Button
            bg="primary"
            color="white"
            _hover={{ color: "black", background: "white", border: "1px" }}
            onClick={handlePrevPage}
          >
            Prev Page
          </Button>
        )}
        <Button
          bg="primary"
          color="white"
          _hover={{ color: "black", background: "white", border: "1px" }}
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      </Stack>

      {selected && (
        <PokemonDrawer pokemon={selected} onClose={() => setSelected(null)} />
      )}
    </Stack>
  );
};

export default Pokedex;
