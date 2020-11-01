import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super();
    this.state = { height: "", width: "", backgroundColor: "" };
  }

  render() {
    return (
      <div className="NewBoxForm">
        <input
          type="text"
          name="height"
          value={this.state.height}
          id="height"
        />
      </div>
    );
  }
}
