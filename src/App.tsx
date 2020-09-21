import React, { useEffect } from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
