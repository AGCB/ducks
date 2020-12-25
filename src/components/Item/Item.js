import React from 'react';
import { Link } from 'react-router-dom';
import './item.scss';

function Item({data}) {
  return (
      <Link to={`/${data}`}>
        <div className="item">
          <span className="item-name">{data}</span>
        </div>
      </Link>
  )
}

export default Item;
