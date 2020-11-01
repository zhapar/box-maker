import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addNewBox = this.addNewBox.bind(this);
  }

  addNewBox(h, w, c) {
    h = h.parseInt();
    w = w.parseInt();
    let boxes = this.state.boxes;
    boxes.push({ height: h, width: w, backgroundColor: c });
    this.setState(boxes);
  }

  render() {
    return (
      <div className="Box-List">
        <h1>Box Maker!</h1>
        <NewBoxForm addNewBox={this.addNewBox} />
      </div>
    );
  }
}

export default BoxList;
