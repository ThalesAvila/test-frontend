import React from "react";
import { Switch, Route } from "react-router-dom";
import Ranking from "../pages/Ranking";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Ranking} />
  </Switch>
);

export default Routes;
