import { URL_POKEMON } from "./settingsURL";

// params = name or id
export const getMiniData = async (params) => {
  let url = `${URL_POKEMON}/${params}`;

  return await fetch(url)
    .then((res) => res.json())
    .then(({ id, types, sprites, name }) => {
      return {
        name,
        image: sprites.other["official-artwork"].front_default,
        id,
        types: types.map(({ type }) => type.name),
      };
    });
};
