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
              "top": segment[0],
              "left": segment[1]*100,
              "width": "50px",
              "height": "50px",
              "backgroundColor": "blue",
            }}>x</div>
          )
        })
      }
    </div>
  )
}

export default Snake;
