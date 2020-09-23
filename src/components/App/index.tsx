import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import Footer from "../Footer";
import "./App.scss";
const App: React.FC = () => (
  <div className="App">
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>
);

export default App;
