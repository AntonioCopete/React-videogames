import React, { Component } from "react";
import "./GameCard.scss";
import { Link } from "react-router-dom";

export default class GameCard extends Component {
  render() {
    const { id, title, thumbnail } = this.props.game;
    return (
      <li className="game-card">
        <Link to={"/games/" + id}>
          <h2>{title}</h2>
          <img src={thumbnail} alt={title} />
        </Link>
      </li>
    );
  }
}
