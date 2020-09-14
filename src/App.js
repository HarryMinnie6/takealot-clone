import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//own components
import Header from './components/header/Header'
import SearchBar from './components/header/SearchBar'
import Banner from './components/banner/Banner'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login'
import {useStateValue} from './StateProvider'

// firebase "dependencies"
import {auth} from './firebase'

function App() {
  const [{user}, dispatch] = useStateValue();

//useEffect Hook
//runs on a given condition
useEffect(() => {
  const unsubscribe =auth.onAuthStateChanged((authUser)=> {
    if(authUser) {
      //user is logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      });
    }
  });

  return()=> {
    //Any clean up operations go in here
    unsubscribe();
  }

}, [])

console.log('USER IS >>>>', user);

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
