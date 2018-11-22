import React from "react";

class Drumbeat extends React.Component {
  state = {
    display: ""
  };
  handleClick = () => {
    this.setState({
      display: "beat"
    });
  };

  handleReset = () => {
    this.setState({
      display: ""
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.display}</p>
        <button onClick={this.handleClick}>Click Me!!</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Drumbeat;
