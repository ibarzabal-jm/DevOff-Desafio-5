import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

import Landing from "../components/Pages/Landing";
import Pokedex from "../components/Pages/Pokedex";
import SearchPokemons from "../components/Pages/SearchPokemons";
import SearchMoves from "../components/Pages/SearchMoves";
import TypeCombination from "../components/Pages/TypeCombination";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/search">
            <SearchPokemons />
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
        <Footer />
      </div>
    </Router>
  );
};
