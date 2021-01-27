import { URL_POKEMON } from "./settingsURL";

export const getMiniDataPokemonByID = async (id) => {
  let url = `${URL_POKEMON}/${id}`;

  const pokemon = {
    id,
    image: null,
    name: null,
    types: [],
  };

  await fetch(url)
    .then((res) => res.json())
    .then(({ name, types, sprites }) => {
      pokemon.image =
        sprites.other["official-artwork"].front_default == null
          ? sprites.front_default
          : sprites.other["official-artwork"].front_default;
      pokemon.name = name;
      pokemon.types = types.map(({ type }) => type.name);
    });

  return pokemon;
};
