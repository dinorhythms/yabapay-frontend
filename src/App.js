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
import ContactPage from './screens/public/ContactPage';
import AirtimePage from './screens/public/AirtimePage';
import AirtimePayPage from './screens/public/AirtimePayPage';
import NotFound from './screens/public/NotFound';
import DataPage from './screens/public/DataPage';
import DataPayPage from './screens/public/DataPayPage';
import PowerPage from './screens/public/PowerPage';
import PowerPayPage from './screens/public/PowerPayPage';
import CablePage from './screens/public/CablePage';
import CablePayPage from './screens/public/CablePayPage';

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/features" component={FeaturesPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route exact path="/airtime" component={AirtimePage}/>
        <Route exact path="/data" component={DataPage}/>
        <Route exact path="/power" component={PowerPage}/>
        <Route exact path="/cable" component={CablePage}/>
        <Route exact path="/airtime/:provider" component={AirtimePayPage}/>
        <Route exact path="/data/:provider" component={DataPayPage}/>
        <Route exact path="/power/:provider" component={PowerPayPage}/>
        <Route exact path="/cable/:provider" component={CablePayPage}/>
        <Route component={NotFound}/>
      </Switch>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default withRouter(App);
