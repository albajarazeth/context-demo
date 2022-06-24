import React, { Component } from "react";

export default class PageComponent extends Component {
  render() {
    const styles = {
      backgroundColor: "white",
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
