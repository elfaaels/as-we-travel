import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Router path="/" component={LandingPage}></Router>
      </Router>
    </div>
  );
}

export default App;
