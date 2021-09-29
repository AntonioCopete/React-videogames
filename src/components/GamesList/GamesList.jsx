import React, { Component } from "react";
import GameCard from "../GameCard";
import "./GamesList.scss";
export default class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  getGames() {
    return fetch(
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
        this.setState({ games: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getGames();
  }
  render() {
    const { games } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <ul className="games-grid">
          {games.map((game) => {
            return <GameCard key={games.id} game={game} />;
          })}
        </ul>
      </div>
    );
  }
}
