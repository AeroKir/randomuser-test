import React from 'react';
import { Layout } from 'antd';

import reactLogo from '../../assets/react-logo.svg';

function HomePage() {
  const { Content } = Layout;

  return (
    <Content>
      <div>
        <img src={reactLogo} alt="" />
      </div>
    </Content>
  );
}

export default HomePage;
