import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Test from "./pages/Test";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/contact" component={Contactpage} />
          <Route exact path="/test" component={Test} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
