import React from "react";
import { Router, Link } from "@reach/router";
import Second from "./Second";
import Drumbeat from "./DrumBeat";

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello from React!!</h1>
        <Router>
          <Drumbeat path="drumbeat" />
          <Second path="second" />
        </Router>
        <Link to="second">
          <p>Second Page</p>
        </Link>
        <Link to="drumbeat">
          <p>test drumbeat</p>
        </Link>
      </div>
    );
  }
}

export default App;
