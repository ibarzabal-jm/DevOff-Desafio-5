const getFirstData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    abilities: abilitiesData,
    height,
    name,
    stats: statsData,
    types: typesData,
    weight,
  } = await resp.json();

  return {
    abilities: abilitiesData.map(({ ability }) => ability.name),
    height,
    id,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    name,
    stats: statsData.reduce(
      (obj, item) => ({ ...obj, [item.stat.name]: item.base_stat }),
      {}
    ),
    totalStats: statsData.reduce((sum, value) => sum + value.base_stat, 0),
    types: typesData.map(({ type }) => type.name),
    weight,
  };
};

const getSecondData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const { generation, genera, description } = await resp.json();

  return {
    generation,
    genera,
    description,
  };
};

export const getPokeInfoByID = (id) => {
  const pokemon = Promise.all([getFirstData(id), getSecondData(id)]).then(
    ([first, second]) => {
      return {
        ...first,
        ...second,
      };
    }
  );
  return pokemon;
};
