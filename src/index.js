import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import Header from './components/Header/Header.js';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
import DefaultReduxPage from './pages/DefaultReduxPage/DefaultReduxPage.jsx';
import ToggleReduxPage from './pages/ToggleReduxPage/ToggleReduxPage.jsx';
import CreateCharacterPage from './pages/CreateCharacterPage/CreateCharacterPage.jsx';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route exact path="/"> <App/> </Route>
          <Route path="/default"> <DefaultReduxPage/> </Route>
          <Route path="/toggle"> <ToggleReduxPage/> </Route>
          <Route path="/character"> <CreateCharacterPage/> </Route>

        </Switch>
      </Provider>
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
