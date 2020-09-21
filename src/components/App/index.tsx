import React from "react";
import Routes from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
