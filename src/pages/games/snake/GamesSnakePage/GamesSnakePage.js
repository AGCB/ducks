import React from 'react';
import './games-snake-page.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTrue,
  toggleFalse,
  snakeToggleValue,
} from '../../../../features/games/snake/snakeSlice.js';
import Snake from './components/Snake/Snake.js';

function GamesSnakePage() {
  const toggle = useSelector(snakeToggleValue);
  const dispatch = useDispatch();

  function handleSnakeToggleButton() {
    toggle ?
      dispatch(toggleFalse()) :
      dispatch(toggleTrue());
  }

  function handleKeyPress(e) {
    const keyCode = e.keyCode;
    switch(keyCode) {
      case 38:
        console.log('pressed up');
        break;
      case 39:
        console.log('pressed right');
        break;
      case 40:
        console.log('pressed down');
        break;
      case 37:
        console.log('pressed left');
        break;
      default:
        console.log('not an arrow');
        break;
    }
  }

  return (
    <div className="games-snake-page">
      <span>games snake page</span>
      <button onClick={handleSnakeToggleButton}>click to toggle snake</button>
      <span>{`our snake is...${toggle}`}</span>
      {
        toggle && <Snake/>
      }
      {
        toggle && <input onKeyDown={handleKeyPress}/>
      }
    </div>
  )
}

export default GamesSnakePage;
