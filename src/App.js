import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//own components
import Header from './components/header/Header'
import SearchBar from './components/header/SearchBar'
import Banner from './components/banner/Banner'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'


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
          <h1> login</h1>
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
