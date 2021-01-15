import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Pokedex from "../components/pages/Pokedex";
import LandingPage from "../components/pages/LandingPage";
import Footer from "../components/UI/Footer";
import TypeCombination from "../components/pages/TypeCombination";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/combination">
            <TypeCombination />
          </Route>
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
