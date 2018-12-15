import React from "react";
import { navigate } from "@reach/router";

class Demo extends React.Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleClick = () => {
    const heading = this.state.title;
    if (this.state.title !== "") {
      navigate("demo/notebook", { state: { heading: heading } });
    }
  };

  render() {
    const { title } = this.state.title;

    return (
      <div>
        <p>Create new Notebook</p>
        <form>
          <label htmlFor="notebook-name">Enter Notebook Subject:</label>
          <input
            id="notebook-name"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default Demo;
