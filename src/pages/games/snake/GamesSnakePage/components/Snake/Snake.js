import React from 'react';
import './snake.scss';

function Snake({segments}) {
  return (
    <div className="snake">
      <span>&nbsp;</span>
      {
        segments.map(segment => {
          console.log('!!! here is our segment');
          return (
            <div style={{
              "position": "absolute",
              "top": segment[1],
              "left": segment[0],
              "width": "10px",
              "height": "10px",
              "backgroundColor": "blue",
            }}>x</div>
          )
        })
      }
    </div>
  )
}

export default Snake;
