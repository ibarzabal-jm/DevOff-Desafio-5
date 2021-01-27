import { URL_POKEMON } from "./settingsURL";

export const getMiniDataPokemonByName = async (pokemonName) => {
  let url = `${URL_POKEMON}/${pokemonName}`;

  return await fetch(url)
    .then((res) => res.json())
    .then(({ id, types, sprites, name }) => {
      return {
        name,
        image:
          sprites.other["official-artwork"].front_default == null
            ? sprites.front_default
            : sprites.other["official-artwork"].front_default,
        id,
        types: types.map(({ type }) => type.name),
      };
    });
};
