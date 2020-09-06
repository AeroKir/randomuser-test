import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Button, Row, Col,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import LogoContainer from '../logo/logoContainer';
import NavbarContainer from '../navbar/navbarContainer';
import UserProfileHeaderBlockContainer from '../user/userProfileHeaderBlockContainer';

import 'antd/dist/antd.css';
import './Header.css';

function Header({ handleSignIn, isSignedIn }) {
  const header = classNames('Header');

  return (
    <>
      <Layout.Header className={header}>

        <Row align="top" style={{ width: '5%' }}>
          <Col>
            <LogoContainer />
          </Col>
        </Row>
        <Row justify="space-between" align="top" style={{ width: '95%' }}>
          <Col span={10}>
            <NavbarContainer />
          </Col>
          {!isSignedIn ? (
            <Col span={2}>
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
            </Col>
          ) : (
            <Col span={6}>
              <UserProfileHeaderBlockContainer />
            </Col>
          )}
        </Row>

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
