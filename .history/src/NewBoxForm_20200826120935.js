import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super();
    this.state = { height: "", width: "", backgroundColor: "" };
  }

  render() {
    return (
      <div className="NewBoxForm">
        <form>
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              id="height"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
