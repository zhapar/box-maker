import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div
        style={{
          height: `${this.props.height}px`,
          width: `${this.props.width}px`,
          backgroundColor: this.props.backgroundColor,
        }}
      ></div>
    );
  }
}

export default Box;
