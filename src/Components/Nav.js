import React, { Component } from "react";

import { AiOutlineSearch } from "react-icons/ai";

import "./Nav.css";
const Switch = () => {
  return (
    <section>
      <div className="toggle">
        <p>Light</p>
        <div class="button-container">
          <button class="btn">
            <div class="switch"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="left-side">
          <span className="flag">flag</span>
          <Switch />
        </div>
        <div className="right-side">
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
          <input className="search-input" type="text"></input>
        </div>
      </nav>
    );
  }
}
