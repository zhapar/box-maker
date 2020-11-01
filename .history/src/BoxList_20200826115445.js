import React, { Component } from "react";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }

  render() {
    return <h1>Box List!</h1>;
  }
}

export default BoxList;
