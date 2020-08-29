import React from 'react';
import {
  Layout, Button, Row, Col,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SignInForm from '../../components/forms/SignInForm';
import AppImage from '../../components/image/AppImage';

import 'antd/dist/antd.css';
import './HomePageLayout.css';

// import logo from '../../assets/wezom-logo.svg';
import reactLogo from '../../assets/react-logo.svg';

function HomePageLayout() {
  const { Content } = Layout;
  const layout = classNames('Layout');
  const pageContent = classNames('PageContent');

  return (
    <Layout className={layout}>
      <Header />

      <Content>
        <SignInForm />
        <div className={pageContent}>
          <img src={reactLogo} alt="" />
        </div>
        <AppImage />
      </Content>
      <Footer />
    </Layout>
  );
}

export default HomePageLayout;
