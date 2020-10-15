import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";

const Hats = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
