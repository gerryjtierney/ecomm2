import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import "../src/pages/homepage/homepage.styles.css";

function HatsPage(){
  return(
  <div>
    <h1>HATS</h1>
  </div>
  )
};

function App() {
  return (
    <div className="App">

        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />


    </div>
  );
}

export default App;
