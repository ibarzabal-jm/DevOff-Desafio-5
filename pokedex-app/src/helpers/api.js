import { getMiniDataPokemon } from "./getMiniDataPokemon";
import { getPokeInfoByID } from "./getPokeInfoByID";

const PAGE_SIZE = 10;

export default {
  list: (page) => {
    return Promise.all(
      new Array(PAGE_SIZE + 1)
        .fill(true)
        .map((_, index) => index)
        .slice(1)
        .map((id) => getMiniDataPokemon(PAGE_SIZE * page + id))
    );
  },
  miniData: (id) => {
    return getMiniDataPokemon(id);
  },
  fullData: (id) => {
    return getPokeInfoByID(id);
  },
};
