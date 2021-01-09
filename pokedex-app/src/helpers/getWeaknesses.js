const data = [
  {
    id: "fire",
    bug: 0.5,
    dark: 1,
    dragon: 1,
    electric: 1,
    fairy: 0.5,
    fighting: 1,
    fire: 0.5,
    flying: 1,
    ghost: 1,
    grass: 0.5,
    ground: 2,
    ice: 0.5,
    normal: 1,
    poison: 1,
    psychic: 1,
    rock: 2,
    steel: 0.5,
    water: 2,
  },
  {
    id: "flying",
    bug: 0.5,
    dark: 1,
    dragon: 1,
    electric: 2,
    fairy: 1,
    fighting: 0.5,
    fire: 1,
    flying: 1,
    ghost: 1,
    grass: 0.5,
    ground: 0,
    ice: 2,
    normal: 1,
    poison: 1,
    psychic: 1,
    rock: 2,
    steel: 1,
    water: 1,
  },
];

// Mando tipo: [fire, flying]
export const getWeaknesses = (types) => {
  let weaknesses = {};
  let firstWeak = data.find((type) => type.id === types[0]);

  if (types.length === 1) {
    weaknesses = firstWeak;
  } else {
    let secondWeak = data.find((tipo) => tipo.id === types[1]);
    Object.keys(firstWeak).forEach((type) => {
      weaknesses[type] = firstWeak[type] * secondWeak[type];
    });
  }

  delete weaknesses.id;

  return weaknesses;
};

//Debería retornar//
// weaknesses = {
//   bug: 0.25,
//   dark: 1,
//   dragon: 1,
//   electric: 2,
//   fairy: 0.5,
//   fighting: 0.5,
//   fire: 0.5,
//   flying: 1,
//   ghost: 1,
//   grass: 0.25,
//   ground: 0,
//   ice: 1,
//   normal: 1,
//   poison: 1,
//   psychic: 1,
//   rock: 4,
//   steel: 0.5,
//   water: 2
// }
