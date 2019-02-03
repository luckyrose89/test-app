import React from "react";
import { Router, Link } from "@reach/router";
import Demo from "./demo/Demo";
import Dashboard from "./dashboard/Dashboard";
import Notebook from "./demo/Notebook";
import CreateNotebook from "./dashboard/CreateNotebook";
import ViewNotebook from "./dashboard/ViewNotebook";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Hello from React!!</h1>
        </Link>
        <Link to="dashboard">
          <p>Dashboard</p>
        </Link>
        <Link to="demo">
          <p>Demo</p>
        </Link>
        <Router>
          <Demo path="demo" />
          <Notebook path="demo/notebook" />
          <Dashboard path="dashboard" />
          <CreateNotebook path="dashboard/create" />
          <ViewNotebook path="dashboard/view" />
        </Router>
      </div>
    );
  }
}

export default App;
