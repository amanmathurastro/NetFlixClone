import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";
import MovieDetails from "../src/components/MovieDetails/MovieDetails";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie/:imdbId">
            <MovieDetails />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
