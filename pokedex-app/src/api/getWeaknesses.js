import { dataTypeWeaknesses as data } from "../data/dataTypeWeaknesses";

export const getWeaknesses = (types) => {
  let weaknesses = {};


  if (types.length === 1) {
    weaknesses = data[types];
  } else {

    const weaks1 = data[types[0]]
    const weaks2 = data[types[1]]


    weaknesses = Object.keys(weaks1)
                .reduce((combination, type) => {
                  
                  combination[type] = weaks1[type] * weaks2[type];
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
