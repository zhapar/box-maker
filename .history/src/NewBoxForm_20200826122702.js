import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super();
    this.state = { height: "", width: "", backgroundColor: "" };
    this.handleChange = this.handleChange.bind(this);
    this.sendSubmit = this.sendSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
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
        <button>Add a new box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
