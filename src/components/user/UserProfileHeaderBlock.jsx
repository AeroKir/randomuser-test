import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Menu,
  Dropdown,
  Button,
  Divider,
} from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './UserProfileHeaderBlock.css';

import avatar from '../../assets/panda.jpg';

function UserProfileHeaderBlock() {
  const userProfileHeaderBlock = classNames('UserProfileHeaderBlock');
  const userProfileHeaderBlockButton = classNames('UserProfileHeaderBlock-button');
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Divider style={{ margin: '0' }} />
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={userProfileHeaderBlock}>
      <Dropdown overlay={menu}>
        <Button type="link" className={userProfileHeaderBlockButton}>
          Hello! Mr. Herbert Phillips
          <DownOutlined />
        </Button>
      </Dropdown>
      <Avatar
        src={avatar}
        style={{ width: '46px', height: '46px' }}
      />
    </div>
  );
}

export default UserProfileHeaderBlock;
