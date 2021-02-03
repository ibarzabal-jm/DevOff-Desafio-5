import { useEffect, useState, useRef } from "react";
import { api } from "../api/api";

export const useFetchPokedex = (page) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    pokemons: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ pokemons: [], loading: true, error: null });
    api.list(page).then((newPokemons) => {
      if (isMounted.current)
        setState({
          pokemons: newPokemons,
          loading: false,
        });
    });
  }, [page]);
  return state;
};
