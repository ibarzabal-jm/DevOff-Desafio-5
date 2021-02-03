import { useEffect, useRef, useState } from "react";
import { getPokeInfoByID } from "../api/getPokeInfoByID";

export const useFetchPokeInfo = (id) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getPokeInfoByID(id).then((pokeData) => {
      if (isMounted.current) {
        setState({
          data: pokeData,
          loading: false,
        });
      }
    });
  }, [id]);
  return state;
};
