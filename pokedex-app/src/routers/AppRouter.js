import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

import Landing from "../components/Pages/Landing";
import Pokedex from "../components/Pages/Pokedex";
import SearchPokemons from "../components/Pages/SearchPokemons";
import SearchMoves from "../components/Pages/SearchMoves";
import TypeCombination from "../components/Pages/TypeCombination";
import { Flex, Grid } from "@chakra-ui/react";
import PokemonQuiz from "../components/Pages/PokemonQuiz";

export const AppRouter = () => {
  return (
    <Router>
      <Grid
        h="100vh"
        width="100vw"
        templateColumns="1fr"
        templateRows="auto 1fr auto"
      >
        <Navbar />

        <Grid
          justifyItems="stretch"
          overflowY="scroll"
          overflowX="hidden"
          backgroundImage={{
            base: "none",
            md: "url(/assets/ui/background.png)",
          }}
        >
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
        </Grid>
        <Footer />
      </Grid>
    </Router>
  );
};
