import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "./font.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './store';
dotenv.config();

// persistor.purge();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router basename='/'>
        <App />
        </Router>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
  // ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
