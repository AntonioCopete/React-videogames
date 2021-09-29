import React, { Component } from "react";
import GameCard from "../GameCard";
import "./GamesList.scss";
export default class GamesList extends Component {
  render() {
    const { gameList } = this.props;
    return (
      <div>
        <ul className="games-grid">
          {gameList.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
        </ul>
      </div>
    );
  }
}
