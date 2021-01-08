const data = [
  {
    id: "fire",
    fire: 1,
    water: 2,
    electric: 0,
  },
  {
    id: "flying",
    fire: 3,
    water: 4,
    electric: 2,
  },
];

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

/* 

 //Debería retornar//
  weaknesses = {
    fire: 3,
    water: 8,
    electric: 0,
  }
*/
