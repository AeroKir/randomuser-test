import React from 'react';
import { Layout } from 'antd';

// import './HomePage.css';

function NotFoundPage() {
  const { Content } = Layout;

  return (
    <Content>
      <div className="App-header">
        <h1>Page Not found</h1>
      </div>
    </Content>
  );
}

export default NotFoundPage;
