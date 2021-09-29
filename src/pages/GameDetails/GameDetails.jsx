import React from "react";

export default class MyComponent extends React.Component {
  render() {
    const { gameId } = this.props.match.params;
    console.log(gameId);
    return <div>Hi!</div>;
  }
}
