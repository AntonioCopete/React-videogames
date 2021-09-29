import React, { Component } from "react";
import GamesList from "../../components/GamesList";

export default class Home extends Component {
  render() {
    return <GamesList gameList={this.props.gameList} />;
  }
}
