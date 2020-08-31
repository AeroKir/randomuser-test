import React from 'react';
import { Layout } from 'antd';

import './HomePage.css';
import reactLogo from '../../assets/react-logo.svg';

function HomePage() {
  const { Content } = Layout;

  return (
    <Content>
      <div className="HomePage">
        <img className="App-logo" src={reactLogo} alt="React logo" />
      </div>
    </Content>
  );
}

export default HomePage;
