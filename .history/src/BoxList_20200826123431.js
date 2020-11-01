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

  addNewBox(data) {
    let { height, width, backgroundColor } = data;
    console.log(height, width, backgroundColor);
    height = parseInt(height);
    width = parseInt(width);
    let boxes = this.state.boxes;
    boxes.push({ height, width, backgroundColor });
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
