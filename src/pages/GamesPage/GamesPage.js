import React from 'react';
import { Link } from 'react-router-dom';
import './games-page.scss';

function GamesPage() {
  return (
    <div className="games-page">
      <Link to="games/snake">
        <span className="snake-game">snake</span>
      </Link>
    </div>
  )
}

export default GamesPage;
