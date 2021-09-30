import React, { Component } from "react";
import "./GameCard.scss";
import { Link } from "react-router-dom";

export default class GameCard extends Component {
  render() {
    const { title, thumbnail } = this.props.game;
    const browserRouterTitle = title.split(" ").join("-");
    return (
      <li className="game-card">
        <Link to={"/games/" + browserRouterTitle}>
          <h2>{title}</h2>
          <img src={thumbnail} alt={title} />
        </Link>
      </li>
    );
  }
}
