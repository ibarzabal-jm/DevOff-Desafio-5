export const getMiniDataPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = {
    id,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    name: null,
    types: [],
  };

  await fetch(url)
    .then((res) => res.json())
    .then(({ name, types }) => {
      pokemon.name = name;
      pokemon.types = types.map(({ type }) => type.name);
    });

  return pokemon;
};
