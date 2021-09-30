import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import React from "react";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameList: [],
      gameDetails: {},
    };

    this.getGameDetails = this.getGameDetails.bind(this);
  }

  componentDidMount() {
    this.getGameList();
  }

  getGameDetails(gameTitle) {
    const fixedTitle = gameTitle.split("-").join(" ");
    const test = this.state.gameList.find((game) => game.title === fixedTitle);
    console.log(this.state.gameDetails);

    return fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${test.id}`,
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
        this.setState({ gameDetails: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async getGameList() {
    await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
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
        this.setState({ gameList: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const {
      title,
      thumbnail,
      description,
      genre,
      platform,
      publisher,
      developer,
      release_date,
      freetogame_profile_url,
      game_url,
    } = this.state.gameDetails;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/games/:gameTitle"
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
                freetogame_profile_url={freetogame_profile_url}
                game_url={game_url}
                handleDetails={this.getGameDetails}
              />
            )}
          ></Route>
          <Route path="/">
            <Home gameList={this.state.gameList} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
