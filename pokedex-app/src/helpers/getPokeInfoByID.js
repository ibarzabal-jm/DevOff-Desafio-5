import { getWeaknesses } from "./getWeaknesses";

const getFirstData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    abilities: abilitiesData,
    height,
    name,
    stats: statsData,
    types,
    weight,
  } = await resp.json();

  const typesData = types.map(({ type }) => type.name);

  return {
    abilities: abilitiesData.map(({ ability }) => ability.name),
    height: height / 10,
    id,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    name,
    stats: statsData.reduce(
      (obj, item) => ({ ...obj, [item.stat.name]: item.base_stat }),
      {}
    ),
    totalStats: statsData.reduce((sum, value) => sum + value.base_stat, 0),
    types: typesData,
    weaknesses: getWeaknesses(typesData),
    weight: weight / 10,
  };
};

const getSecondData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const {
    egg_groups: eggsData,
    gender_rate: gender,
    genera,
    generation,
    flavor_text_entries: description,
    hatch_counter: hatch,
  } = await resp.json();

  return {
    eggs: eggsData.map((egg) => egg.name),
    gen: generation.name,
    gender,
    genera: genera.find((genus) => genus.language.name === "en").genus,
    description: description.filter(
      (desc) =>
        (desc.language.name === "en" && desc.version.name === "heartgold") ||
        (desc.language.name === "en" && desc.version.name === "firered") ||
        (desc.language.name === "en" && desc.version.name === "sword")
    ),
    hatch,
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
