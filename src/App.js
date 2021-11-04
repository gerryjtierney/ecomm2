import React, { Component } from 'react'

import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase";
import "../src/pages/homepage/homepage.styles.css";

function HatsPage() {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  )
};

class App extends Component {

  state = {
    currentUser: null
  };

  unsubscribeFromAuth =  null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user })

      console.log(user)
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>

      </div>
    );
  }
}

export default App;
