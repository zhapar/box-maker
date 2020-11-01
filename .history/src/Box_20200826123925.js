import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div
        style={{
          height: this.props.height,
          width: this.props.width,
          backgroundColor: this.props.backgroundColor,
        }}
      ></div>
    );
  }
}
