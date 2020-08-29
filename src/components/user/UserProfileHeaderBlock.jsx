import React from 'react';
import {
  Avatar,
  Menu,
  Dropdown,
  Button,
  message,
} from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './UserProfileHeaderBlock.css';

function UserProfileHeaderBlock() {
  // const { Title, Text } = Typography;
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (

    <div className="UserProfileHeaderBlock">
      <Dropdown overlay={menu}>
        <Button type="link">
          Hello mister
          <DownOutlined />
        </Button>
      </Dropdown>
      <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>

  );
}

export default UserProfileHeaderBlock;
