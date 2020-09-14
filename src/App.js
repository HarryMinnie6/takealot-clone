import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//own components
import Header from './components/header/Header'
import SearchBar from './components/header/SearchBar'
import Banner from './components/banner/Banner'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login'


function App() {
  return (
    <Router>
      <Switch>
        

        <Route path='/checkout'>
        <Header />
          <SearchBar />
          <Checkout />
          
        </Route>

        <Route path='/login'>
        <Header />
          <Login />
        </Route>

        <Route path='/'>
          <Header />
          <SearchBar />
          <Banner />
          <Home />
        </Route>

        

      </Switch>
    </Router>
    
  );
}

export default App;
