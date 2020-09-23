import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { StateProvider } from "./contextAPI/StateProvider";
import reducer, { initialState } from "./contextAPI/reducer";

const Index = (
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

ReactDOM.render(Index, document.getElementById("root"));
