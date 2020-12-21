import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <div className="default-redux-state">
          <Link to="/default">
            <span>default-redux-state</span>
          </Link>
          <Link to="/toggle">
            <span>custom-redux-toggle</span>
          </Link>
        </div>
    </div>
  );
}

export default App;
