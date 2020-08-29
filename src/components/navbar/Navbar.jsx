import React from 'react';
import {
  Menu,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import './Navbar.css';

function Navbar({ disabled }) {
  const navbar = classNames('Navbar');
  const navbarList = classNames('Navbar-list');
  const navbarLink = classNames(
    'Navbar-link',
    {
      'is-disabled': disabled,
    },
  );

  return (
    <nav className={navbar}>
      <ul className={navbarList}>
        <li><a href="http://localhost:3000/" className={navbarLink} disabled={disabled}>home</a></li>
        {/* <li><a href="#" className={navbarLink}>about</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
