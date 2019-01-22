import React from "react";
import { Router, Link } from "@reach/router";
import Drumbeat from "./DrumBeat";
import Demo from "./demo/Demo";
import Notebook from "./demo/Notebook";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <Link to="demo">
            <p>Demo</p>
          </Link>
          <h1>Hello from React!!</h1>
        </Link>
        <Router>
          <Demo path="demo" />
          <Notebook path="demo/notebook" />
        </Router>
      </div>
    );
  }
}

export default App;
