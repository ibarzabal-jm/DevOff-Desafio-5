import { useEffect, useState } from "react";
import { SimpleGrid, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import api from "./helpers/api";
import PokemonThumbnail from "./components/PokemonThumbnail";
import PokemonDrawer from "./components/PokemonDrawer";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api
      .list(page)
      .then((newPokemons) =>
        setPokemons((pokemons) => pokemons.concat(newPokemons))
      );
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
                  delay: index * 0.1,
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
      {selected && (
        <PokemonDrawer pokemon={selected} onClose={() => setSelected(null)} />
      )}
    </Stack>
  );
};

export default App;
