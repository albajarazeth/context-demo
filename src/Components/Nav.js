import React, { Component, useContext } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "../contexts/ThemeContext";

import "./Nav.css";
const Switch = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section>
      <div className="toggle">
        <p>Light</p>
        <div className="button-container">
          <button className="btn">
            {/*click & update page content comp??*/}
            <div onClick={toggleTheme} className="switch"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default class Nav extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;

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
