import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Menu,
  Dropdown,
  Button,
  Divider,
  Typography,
  Spin,
} from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import 'antd/dist/antd.css';
import './UserProfileHeaderBlock.css';

function UserProfileHeaderBlock({
  isUserDataLoading,
  logout,
  goHomePage,
  userData,
}) {
  const userProfileHeaderBlock = classNames('UserProfileHeaderBlock');
  const userProfileHeaderBlockButton = classNames('UserProfileHeaderBlock-button');

  const handleLogout = () => {
    logout();
    goHomePage();
  };
  const { Text } = Typography;

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Divider style={{ margin: '0' }} />
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  if (isUserDataLoading) {
    return (
      <Spin />
    );
  }

  return (
    <div className={userProfileHeaderBlock}>
      {userData.map((user) => (
        <Fragment key={user.login.uuid}>
          <Dropdown overlay={menu}>
            <Button type="link" className={userProfileHeaderBlockButton}>
              <Text ellipsis>
                {`Hello! ${user.name.title}. ${user.name.first} ${user.name.last}`}
              </Text>
              <DownOutlined />
            </Button>
          </Dropdown>
          <Avatar
            src={user.picture.thumbnail}
            style={{ width: '46px', height: '46px' }}
          />
        </Fragment>
      ))}
    </div>
  );
}

UserProfileHeaderBlock.propTypes = {
  isUserDataLoading: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  goHomePage: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.array,
};

UserProfileHeaderBlock.defaultProps = {
  userData: [],
};

export default UserProfileHeaderBlock;
