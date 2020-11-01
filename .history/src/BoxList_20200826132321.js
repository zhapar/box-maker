import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v8";

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
    height = parseInt(height);
    width = parseInt(width);
    let boxes = this.state.boxes;
    boxes.push({ height, width, backgroundColor, id: uuid() });
    this.setState(boxes);
  }

  render() {
    return (
      <div className="Box-List">
        <h1>Box Maker!</h1>
        <NewBoxForm addNewBox={this.addNewBox} />
        {this.state.boxes.length > 0 &&
          this.state.boxes.map((box) => (
            <Box
              height={box.height}
              width={box.width}
              backgroundColor={box.backgroundColor}
            />
          ))}
      </div>
    );
  }
}

export default BoxList;
