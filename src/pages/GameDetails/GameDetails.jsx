import React from "react";

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
    const { id, description } = this.state.game;
    console.log(this.state);
    return <div>{description}</div>;
  }
}
