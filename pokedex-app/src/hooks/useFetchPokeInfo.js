import { useEffect, useState } from "react";
import { getPokeInfoByID } from "../api/getPokeInfoByID";

export const useFetchPokeInfo = (id) => {
  const [state, setState] = useState({ data: [], loading: true });

  

  useEffect(() => {
    getPokeInfoByID(id).then((pokeData) =>
      setState({
        data: pokeData,
        loading: false,
      })
    );
  }, [id]);
  return state;
};
