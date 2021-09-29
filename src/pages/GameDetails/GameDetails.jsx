import React from "react";
import "./GameDetails.scss";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
    };

    this.getGameDetails = this.getGameDetails.bind(this);
  }

  componentDidMount() {
    this.getGameDetails(this.props.match.params.gameId);
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
        this.setState({ game: data });
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
    } = this.state.game;
    return (
      <>
        <div className="game-details">
          <h2>{title}</h2>
          <div className="img-info">
            <img src={thumbnail} alt={title} />

            <div className="game-info">
              <p>
                <span>
                  <b>Genre:</b>
                </span>{" "}
                {genre}
              </p>
              <p>
                <span>
                  <b>Platform:</b>
                </span>{" "}
                {platform}
              </p>
              <p>
                <span>
                  <b>Publisher:</b>
                </span>{" "}
                {publisher}
              </p>
              <p>
                <span>
                  <b>Developer:</b>
                </span>{" "}
                {developer}
              </p>
              <p>
                <span>
                  <b>Release date:</b>
                </span>{" "}
                {release_date}
              </p>
            </div>
          </div>
          <p>
            <span>
              <b>Description:</b>
            </span>{" "}
            {description}
          </p>
          <p>
            <span>
              <b>Links:</b>
            </span>{" "}
            <a href="https://www.freetogame.com/dauntless">Freetogame</a>
            <a href="https://www.freetogame.com/open/dauntless">
              Official Website
            </a>
          </p>
        </div>
      </>
    );
  }
}
