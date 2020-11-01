import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super();
    this.state = { height: "", width: "", backgroundColor: "" };
  }

  handleChange(e) {
    e.preventDefault();
    const title = e.target.name;
    const value = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
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
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              id="width"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
              type="text"
              name="backgroundColor"
              value={this.state.backgroundColor}
              id="backgroundColor"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
