import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

// Public Screens
import HomePage from './screens/public/HomePage';
import AboutUs from './screens/public/AboutUs';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about-us" component={AboutUs}/>
    </Switch>
  );
}

export default withRouter(App);
