export const getMoveByID = async (id) => {
  const moveURL = `https://pokeapi.co/api/v2/move/${id}`;

  const resp = await fetch(moveURL).catch(err => console.log(err));

  const { accuracy, damage_class, name, pp, power, type } = await resp.json();

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
