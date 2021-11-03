import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import "../src/pages/homepage/homepage.styles.css";

function HatsPage() {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
