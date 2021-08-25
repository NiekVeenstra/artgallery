import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// pages
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/contact" component={Contactpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
