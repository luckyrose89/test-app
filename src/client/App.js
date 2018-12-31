import React from "react";
import { Router, Link } from "@reach/router";
import Drumbeat from "./DrumBeat";
import Demo from "./demo/Demo";
import Notebook from "./demo/Notebook";
import ViewNotes from "./demo/ViewNotes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <Link to="drumbeat">
            <p>test drumbeat</p>
          </Link>
          <Link to="demo">
            <p>Demo</p>
          </Link>
          <h1>Hello from React!!</h1>
        </Link>
        <Router>
          <Drumbeat path="drumbeat" />
          <Demo path="demo" />
          <Notebook path="demo/notebook" />
          <ViewNotes path="demo/notebook/viewnote" />
        </Router>
      </div>
    );
  }
}

export default App;
