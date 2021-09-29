import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1>Video Games</h1>
          </Link>
        </header>

        <Switch>
          <Route
            exact
            path="/games/:gameId"
            render={(routeProps) => <GameDetails {...routeProps} />}
          ></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
