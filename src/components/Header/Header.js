import React from 'react';
import logo from '../../logo.svg';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <span>headerrr</span>
      <Link to="/">
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
    </div>
  )
}

export default Header;
