import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div
          style={{
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: this.props.backgroundColor,
          }}
        ></div>
        <button onClick={() => this.props.removeBox(this.props.id)}>
          Remove the box!
        </button>
      </div>
    );
  }
}

export default Box;
