import React from "react";
import "./GameDetails.scss";

export default class MyComponent extends React.Component {
  componentDidMount() {
    this.props.handleDetails(this.props.match.params.gameTitle);
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
      releaseDate,
      freetogame_profile_url,
      game_url,
    } = this.props;
    console.log(this.props.match.params);

    return (
      <>
        <div className="game-details">
          <h2>{title}</h2>
          <div className="img-info">
            <img src={thumbnail} alt={title} />

            <div className="game-info">
              <div className="info-aside">
                <p>
                  <b>Genre:</b>
                </p>
                <p>{genre}</p>
              </div>

              <div className="info-aside">
                <p>
                  <b>Platform:</b>
                </p>
                <p>{platform}</p>
              </div>

              <div className="info-aside">
                <p>
                  <b>Publisher:</b>
                </p>
                <p>{publisher}</p>
              </div>

              <div className="info-aside">
                <p>
                  <b>Developer:</b>
                </p>
                <p>{developer}</p>
              </div>

              <div className="info-aside">
                <p>
                  <b>Release date:</b>
                </p>
                <p>{releaseDate}</p>
              </div>
            </div>
          </div>

          <div className="info-description">
            <p>
              <b>Description:</b>
            </p>
            <p>{description}</p>
          </div>

          <div className="info-links">
            <p>
              <b>Links:</b>
            </p>
            <div className="info-links-group">
              <a href={freetogame_profile_url}>Freetogame page</a>
              <a href={game_url}>Download game</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
