import React, { useState } from 'react';
import {
  Layout, Button, Row, Col,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import SignInForm from '../forms/SignInForm';
import UserProfileHeaderBlock from '../user/UserProfileHeaderBlock';

import 'antd/dist/antd.css';
import './Header.css';

function Header() {
  const [isSignInFormVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isSignInFormVisible);
  const header = classNames('Header');

  return (
    <>
      <Layout.Header className={header}>

        <Row align="top" style={{ width: '5%' }}>
          <Col>
            <Logo />
          </Col>
        </Row>
        <Row justify="space-between" align="top" style={{ width: '95%' }}>
          <Col span={10}>
            <Navbar />
          </Col>
          <Col span={2}>
            <Button
              type="link"
              htmlType="button"
              icon={(
                <LoginOutlined />
              )}
              onClick={toggle}
            >
              Sign In
            </Button>
          </Col>
          {/* <Col span={5}>
            <UserProfileHeaderBlock />
          </Col> */}
        </Row>

      </Layout.Header>

      <SignInForm isVisible={isSignInFormVisible} handleFormClose={toggle} />
    </>
  );
}

export default Header;
