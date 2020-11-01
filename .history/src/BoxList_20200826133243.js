import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addNewBox = this.addNewBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addNewBox(data) {
    let { height, width, backgroundColor } = data;
    height = parseInt(height);
    width = parseInt(width);
    let boxes = this.state.boxes;
    boxes.push({ height, width, backgroundColor, id: uuid() });
    this.setState(boxes);
  }

  removeBox(id) {
    let boxes = this.state.boxes;
    boxes.forEach((box, index) => {
      if (id === box.id) {
        boxes.splice(index, 1);
      }
    });
    this.setState({ boxes });
  }

  render() {
    return (
      <div className="Box-List">
        <h1>Box Maker!</h1>
        <NewBoxForm addNewBox={this.addNewBox} />
        {this.state.boxes.length > 0 &&
          this.state.boxes.map((box) => (
            <Box
              key={box.id}
              height={box.height}
              width={box.width}
              backgroundColor={box.backgroundColor}
              id={box.id}
              removeBox={this.removeBox}
            />
          ))}
      </div>
    );
  }
}

export default BoxList;
