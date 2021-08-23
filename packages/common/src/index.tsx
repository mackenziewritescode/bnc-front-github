import React from "react";
import * as msTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";

const App: React.FC = () => {
  msTeams.initialize();

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/page2" component={Page2} />
    </Router>
  );
};

export default App;
