import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography, Button } from 'antd';
import classNames from 'classnames';

import './Page404.css';

function Page404({ handleClick }) {
  const { Content } = Layout;
  const { Text } = Typography;

  const page404 = classNames('Page404');

  return (
    <Content>
      <div className={page404}>
        <Text type="danger" style={{ fontSize: '78px', fontWeight: 700 }}>404</Text>
        <h1>Requested page not found!</h1>
        <div>
          <Button type="primary" onClick={handleClick}>Back to home</Button>
        </div>
      </div>
    </Content>
  );
}

Page404.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Page404;
