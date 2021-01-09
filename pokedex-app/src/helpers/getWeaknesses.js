const dataWeaknesses = [
  {
    id: "fire",
    bug: 0.5,
    electric: 1,
    water: 2,
  },
  {
    id: "flying",
    bug: 0.5,
    electric: 2,
    water: 1,
  },
];

// Recibo types = [fire, flying] || types = [fire] || types = [flying]
export const getWeaknesses = (types) => {
  let weaknesses = {};
  let firstWeak = dataWeaknesses.find((type) => type.id === types[0]);

  if (types.length === 1) {
    weaknesses = firstWeak;
  } else {
    let secondWeak = dataWeaknesses.find((type) => type.id === types[1]);

    //calculando la combinacion de ambos tipos
    Object.keys(firstWeak).forEach((type) => {
      weaknesses[type] = firstWeak[type] * secondWeak[type];
    });
  }

  delete weaknesses.id;

  return weaknesses;
};

//Debería retornar//
// Caso [fire, flying]
// weaknesses = {
//   bug: 0.25,
//   electric: 2,
//   water: 2
// }
