export const getMoveByName = async (moveName) => {
  const moveURL = `https://pokeapi.co/api/v2/move/${moveName}`;

  const resp = await fetch(moveURL).catch(err =>console.log(err));

  const {
    accuracy,
    damage_class,
    name,
    priority,
    flavor_text_entries: description,
    effect_entries,
    effect_chance,
    pp,
    power,
    target,
    type,
  } = await resp.json();

  const dataClass = damage_class.name;

  return {
    accuracy,
    dataClass,
    name,
    description: description.filter(
      (desc) =>
        (desc.language.name === "en" &&
          desc.version_group.name === "heartgold") ||
        (desc.language.name === "en" &&
          desc.version_group.name === "emerald") ||
        (desc.language.name === "en" && desc.version_group.name === "x-y") ||
        (desc.language.name === "en" &&
          desc.version_group.name === "firered") ||
        (desc.language.name === "en" && desc.version_group.name === "sword")
    )[0]?.flavor_text,
    effect: effect_entries[0].short_effect,
    effect_chance,
    pp,
    power,
    priority,
    target: target.name,
    type: type.name,
  };
};
