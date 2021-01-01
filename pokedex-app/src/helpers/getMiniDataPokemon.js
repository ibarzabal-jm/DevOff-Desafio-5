// export const getMiniDataPokemon = async (id) => {
//   let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const resp = await fetch(url);
//   const data = await resp.json();

//   const pokemon = {
//     id,
//     name: data.name,
//     image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
//     types: data.types.map(({ type }) => type.name),
//   };
//   return pokemon;
// };

export const getMiniDataPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = {
    id,
    name: null,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
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
