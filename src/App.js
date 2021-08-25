import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
