import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }

  addNewBox(h, w, c) {
    h = h.parseInt();
    c = c.parseInt();
  }

  render() {
    return (
      <div className="Box-List">
        <h1>Box Maker!</h1>
        <NewBoxForm />
      </div>
    );
  }
}

export default BoxList;
