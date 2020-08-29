import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import './Footer.css';

function Footer() {
  const footer = classNames('Footer');

  return (
    <Layout.Footer className={footer}>
      <span>2020 &copy; Wezom React-Redux Test</span>
    </Layout.Footer>
  );
}

export default Footer;
