import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Lab1 from "./lab1";
import Home from "./Home";

/* Модель 1 вариант 3 */

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/:any">
          <div>
            <Link to="/">К списку работ</Link>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lab1">
          <Lab1 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
