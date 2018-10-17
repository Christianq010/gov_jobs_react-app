import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

// Routes
import Homepage from "./Views/Homepage";
import ResultsPage from "./Views/ResultsPage";
import ResultPage from "./Views/ResultPage";

class App extends React.Component {
  state = {
    random: true
  };
  render() {
    return (
      <div>
        <Router>
          <Homepage path="/" />
          <ResultsPage path="/results" />
          <ResultPage path="/result" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
