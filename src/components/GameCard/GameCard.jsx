import React, { Component } from "react";
import "./GameCard.scss";
import { Link } from "react-router-dom";

export default class GameCard extends Component {
  render() {
    const {
      id,
      title,
      thumbnail,
      description,
      genre,
      platform,
      publisher,
      developer,
      releaseDate,
    } = this.props.game;
    console.log(this.props.game);
    return (
      <li className="game-card" key={id}>
        <Link to={"/games/" + id}>
          <h2>{title}</h2>
          <img src={thumbnail} alt={title} />
          {/* <p><span><b>Description:</b></span> {description}</p> */}
          {/* <p><span><b>Genre:</b></span> {genre}</p> */}
          {/* <p><span><b>Platform:</b></span> PC (Windows)</p> */}
          {/* <p><span><b>Publisher:</b></span> Phoenix Labs</p> */}
          {/* <p><span><b>Developer:</b></span> Phoenix Labs, Iron Galaxy</p> */}
          {/* <p><span><b>Release date:</b></span> 2019-05-21</p> */}
          {/* <p><span><b>Links:</b></span> <a href="https://www.freetogame.com/dauntless">Freetogame</a><a href="https://www.freetogame.com/open/dauntless">Official Website</a></p> */}
        </Link>
      </li>
    );
  }
}
