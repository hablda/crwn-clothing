import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./Components/Header/Header";
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
