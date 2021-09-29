import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import GamesList from "./components/GamesList";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Video Games</h1>
        </Link>
      </header>

      <Switch>
        <Route exact path="/games/:gameId">
          <GameDetails />
        </Route>

        <Route path="/">
          <GamesList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
