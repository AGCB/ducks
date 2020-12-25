import React from 'react';
import logo from '../../logo.svg';
import Item from '../Item/Item.js';
import menuItems from '../../config/menuItems.js';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <img src={logo} className="app-logo" alt="site-logo" />
      </Link>
      {
        menuItems.map(item => {
          return (
            <Item data={item}/>
          )
        })
      }
    </header>
  )
}

export default Header;
