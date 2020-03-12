import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Ravinto from './Components/Ravinto';
import Treenit from './Components/Treenit';
import Lepo from './Components/Lepo';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ravinto"><Ravinto /></Route>
        <Route path="/treenit"><Treenit /></Route>
        <Route path="/lepo"><Lepo /></Route>
      </Switch>
    </Router>
  );
}

export default App;
