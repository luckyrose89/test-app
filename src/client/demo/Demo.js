import React from "react";
import Notebook from "./Notebook";

class Demo extends React.Component {
  state = {
    title: "",
    notebookCreated: false
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleClick = () => {
    if (this.state.title !== "") {
      this.setState({
        notebookCreated: true
      });
    }
  };

  render() {
    let { notebookCreated, title } = this.state;
    if (notebookCreated === false) {
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
    } else {
      return <Notebook title={title} />;
    }
  }
}

export default Demo;
