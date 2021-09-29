import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameDetailed: {},
    };

    this.getGameDetails = this.getGameDetails.bind(this);
  }

  getGameDetails(id) {
    return fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ gameDetailed: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    console.log(this.state.gameDetailed);
    const {
      title,
      thumbnail,
      description,
      genre,
      platform,
      publisher,
      developer,
      release_date,
    } = this.state.gameDetailed;
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
            render={(routeProps) => (
              <GameDetails
                {...routeProps}
                title={title}
                thumbnail={thumbnail}
                description={description}
                genre={genre}
                platform={platform}
                publisher={publisher}
                developer={developer}
                releaseDate={release_date}
                handleDetails={this.getGameDetails}
              />
            )}
          ></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
