import { getMiniDataPokemon } from "./getMiniDataPokemon";

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
};
