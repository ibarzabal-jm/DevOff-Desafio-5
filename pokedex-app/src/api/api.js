import { URL_POKEMON, PAGE_SIZE } from "./settingsURL";
import { getMiniDataPokemonByID } from "./getMiniDataPokemonByID";
import { getPokeInfoByID } from "./getPokeInfoByID";
import { getMiniDataPokemonByName } from "./getMiniDataByName";

export const api = {
  list: (page) => {
    return fetch(
      `${URL_POKEMON}/?offset=${PAGE_SIZE * page}}&limit=${PAGE_SIZE}`
    )
      .then((res) => res.json())
      .then((response) =>
        Promise.all(
          response.results.map((pokemon) =>
            getMiniDataPokemonByName(pokemon.name)
          )
        )
      );
  },
  miniDataByName: (name) => {
    return getMiniDataPokemonByName(name);
  },
  miniData: (id) => {
    return getMiniDataPokemonByID(id);
  },
  fullData: (id) => {
    return getPokeInfoByID(id);
  },
};

/* list: (page) => {
  return Promise.all(
    new Array(PAGE_SIZE + 1)
      .fill(true)
      .map((_, index) => index)
      .slice(1)
      .map((id) => getMiniDataPokemonByID(PAGE_SIZE * page + id))
  );
}, */
