const data = {
  fire: {
    bug: 0.5,
    electric: 1,
    water: 2,
  },
  flying: {
    bug: 0.5,
    electric: 2,
    water: 1,
  },
  water: {
    bug: 0.5,
    electric: 2,
    water: 0.5,
  },
};

// Recibo types = [fire, flying] || types = [fire] || types = [flying] || types = [water] || types = [water, fire] etc
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

  console.log(weaknesses);
};
