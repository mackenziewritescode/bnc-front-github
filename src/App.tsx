import React from "react";
import * as msTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Configure from "./pages/Configure";

export default function App() {
  msTeams.initialize();

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/configure" component={Configure} />
    </Router>
  );
}
