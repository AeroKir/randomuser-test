import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import LogoContainer from '../logo/logoContainer';
import NavbarContainer from '../navbar/navbarContainer';
import UserProfileHeaderBlockContainer from '../user/userProfileHeaderBlockContainer';

import 'antd/dist/antd.css';
import './Header.css';

function Header({ handleSignIn, isSignedIn }) {
  const header = classNames('Header');
  const headerLogo = classNames('Header-logo');
  const headerNavMenu = classNames('Header-navMenu');
  const headerProfile = classNames('Header-profile');

  return (
    <>
      <Layout.Header className={header}>

        <div className={headerLogo}>
          <LogoContainer />
        </div>

        <div className={headerNavMenu}>
          <NavbarContainer />
        </div>

        <div className={headerProfile}>
          {!isSignedIn ? (
            <Button
              type="link"
              htmlType="button"
              icon={(
                <LoginOutlined />
              )}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          ) : (
            <UserProfileHeaderBlockContainer />
          )}
        </div>

      </Layout.Header>
    </>
  );
}

Header.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
};

Header.defaultProps = {
  isSignedIn: false,
};

export default Header;
