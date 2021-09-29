import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">
            <h1>Video Games</h1>
          </Link>
        </header>
      </>
    );
  }
}