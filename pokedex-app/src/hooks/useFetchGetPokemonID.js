import { useEffect, useRef, useState } from "react";
import { api } from "../api/api";

export const useFetchGetPokemonID = (id) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    api.miniData(id).then((pokeData) =>
      setState({
        pokemon: pokeData,
        loading: false,
      })
    );
  }, [id]);
  return state;
};
