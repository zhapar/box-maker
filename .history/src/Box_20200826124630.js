import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div
        style={{
          height: `${this.props.height}rem`,
          width: `${this.props.width}rem`,
          backgroundColor: this.props.backgroundColor,
        }}
      ></div>
    );
  }
}

export default Box;
