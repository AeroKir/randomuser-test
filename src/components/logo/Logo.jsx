import React from 'react';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './Logo.css';
import wezomLogo from '../../assets/wezom-logo.svg';

function Logo() {
  const logo = classNames('Logo');
  return (
    <img src={wezomLogo} alt="Wezom logo" className={logo} />
  );
}

export default Logo;
