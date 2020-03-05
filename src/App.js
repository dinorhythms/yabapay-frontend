import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

// Public Screens
import HomePage from './screens/public/HomePage';
import AboutUs from './screens/public/AboutUs';
import NavBar from './components/public/NavBar';
import NewsLetter from './components/public/NewsLetter';
import Footer from './components/public/Footer';
import FeaturesPage from './screens/public/FeaturesPage';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/features" component={FeaturesPage}/>
      </Switch>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default withRouter(App);
