import { getWeaknesses } from "./getWeaknesses";

const moveFetch = async (url) => {
  const resp = await fetch(url);
  const { accuracy, damage_class, name, power, type } = await resp.json();
  const dataType = type.name;
  const dataClass = damage_class.name;
  return {
    accuracy,
    dataClass,
    name,
    power,
    type: dataType,
  };
};

const getFirstData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    abilities: abilitiesData,
    height,
    moves,
    name,
    stats: statsData,
    types,
    weight,
  } = await resp.json();

  const typesData = types.map(({ type }) => type.name);

  const movesFilter = moves.filter(({ version_group_details }) =>
    version_group_details.find(
      ({ version_group }) => version_group.name === "firered-leafgreen"
    )
  );

  const movesData = await Promise.all(
    movesFilter.map(({ move }) => moveFetch(move.url))
  );

  return {
    abilities: abilitiesData.map(({ ability }) => ability.name),
    height: height / 10,
    id,
    image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    moves: movesData,
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
        (desc.language.name === "en" && desc.version.name === "emerald") ||
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
