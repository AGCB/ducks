import React from 'react';
// pages
import HomePage from './pages/HomePage/HomePage.js';
import GamesPage from './pages/GamesPage/GamesPage.js';
import GamesSnakePage from './pages/games/snake/GamesSnakePage/GamesSnakePage.js';
// components
import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header.js';
// routing
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/default" component={Counter}/>
        <Route path="/games/snake" component={GamesSnakePage}/>
        <Route path="/games" component={GamesPage}/>
      </Switch>
    </div>
  );
}

export default App;
