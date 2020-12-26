import React from 'react';
import './games-snake-page.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTrue,
  toggleFalse,
  snakeToggleValue,
} from '../../../../features/games/snake/snakeSlice.js';


function GamesSnakePage() {
  const toggle = useSelector(snakeToggleValue);
  const dispatch = useDispatch();
  function handleSnakeToggleButton() {
    toggle ?
      dispatch(toggleFalse()) :
      dispatch(toggleTrue());
    }
  return (
    <div className="games-snake-page">
      <span>games snake page</span>
      <button onClick={handleSnakeToggleButton}>click to toggle snake</button>
      <span>{`our snake is...${toggle}`}</span>

    </div>
  )
}

export default GamesSnakePage;
