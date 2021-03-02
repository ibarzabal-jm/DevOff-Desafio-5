import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "../components/Pages/Landing";
import Pokedex from "../components/Pages/Pokedex";
import SearchPokemons from "../components/Pages/SearchPokemons";
import SearchMoves from "../components/Pages/SearchMoves";
import TypeCombination from "../components/Pages/TypeCombination";

import PokemonQuiz from "../components/Pages/PokemonQuiz";

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/search">
        <SearchPokemons />
      </Route>
      <Route exact path="/quiz">
        <PokemonQuiz />
      </Route>
      <Route exact path="/moves">
        <SearchMoves />
      </Route>
      <Route exact path="/combination">
        <TypeCombination />
      </Route>
      <Route exact path="/pokedex">
        <Pokedex />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  );
};
