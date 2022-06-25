import React, { createContext, Component } from "react";

//new instance of context
export const ThemeContext = createContext();

//class where we wrap the context we need to get info from
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true }; //defining a state, which we use in +1 places
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  //creating a method to toggle states
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }} //we pass state & method
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
