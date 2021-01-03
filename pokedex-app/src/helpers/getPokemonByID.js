export const getPokemonByID = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    abilities: abilitiesData,
    height,
    name,
    stats: statsData,
    types: typesData,
    weight,
  } = await resp.json();

  const pokemon = {
    abilities: abilitiesData.map(({ ability }) => ability.name),
    description: null,
    height,
    id,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    name,
    species: null,
    stats: statsData.reduce(
      (obj, item) => ({ ...obj, [item.stat.name]: item.base_stat }),
      {}
    ),
    types: typesData.map(({ type }) => type.name),
    weight,
  };
  return pokemon;
};
