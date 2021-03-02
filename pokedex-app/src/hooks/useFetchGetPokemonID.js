import { useEffect, useRef, useState } from "react";
import { api } from "../api/api";

export const useFetchGetPokemonID = (id) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ pokemon: [], loading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (id !== null) {
      setState({ pokemon: null, loading: true });
      api.miniData(id).then((pokeData) => {
        if (isMounted.current)
          setState({
            pokemon: pokeData,
            loading: false,
          });
      });
    }
  }, [id]);
  return state;
};
