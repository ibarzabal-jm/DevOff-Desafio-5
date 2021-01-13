import { dataTypeWeaknesses as data } from "../data/dataTypeWeaknesses";

export const getWeaknesses = (types) => {
  let weaknesses = {};

  if (types.length === 1) {
    weaknesses = data[types];
  } else {
    weaknesses = types.reduce((combination, type) => {
      for (const [typeName, number] of Object.entries(data[type])) {
        if (!combination[typeName]) {
          combination[typeName] = 1;
        }
        combination[typeName] *= number;
      }

      return combination;
    }, {});
  }

  //  Recibo
  // weaknesses = {
  //   bug: 1,
  //   dragon: 1,
  //   fire: 2,
  //   water: 3,
  // };

  const invertido = Object.entries(weaknesses).reduce((acc, [key, value]) => {
    if (acc[value]) {
      acc[value].push(key);
      return acc;
    } else {
      return { ...acc, [value]: [].concat(key) };
    }
  }, {});

  return invertido;
};
