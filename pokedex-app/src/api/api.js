import { URL_POKEMON, PAGE_SIZE } from "./settingsURL";
import { getPokeInfoByID } from "./getPokeInfoByID";
import { getMiniData } from "./getMiniData";

export const api = {
  list: (page) => {
    return fetch(
      `${URL_POKEMON}/?offset=${PAGE_SIZE * page}}&limit=${PAGE_SIZE}`
    )
      .then((res) => res.json())
      .then((response) =>
        Promise.all(
          response.results.map((pokemon) => getMiniData(pokemon.name))
        )
      );
  },
  miniData: (key) => {
    return getMiniData(key);
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
      .map((id) => getMiniData(PAGE_SIZE * page + id))
  );
}, */
