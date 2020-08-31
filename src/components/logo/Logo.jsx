import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './Logo.css';
import wezomLogo from '../../assets/wezom-logo.svg';

function Logo() {
  const logo = classNames('Logo');
  return (
    <NavLink to="/">
      <img src={wezomLogo} alt="Wezom logo" className={logo} />
    </NavLink>
  );
}

export default Logo;
