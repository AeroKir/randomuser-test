import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import UserProfile from '../../components/user/UserProfile';

import 'antd/dist/antd.css';
import '../home-page/HomePageLayout.css';

function UserProfileLayout() {
  const { Content } = Layout;

  const layout = classNames('Layout');

  return (
    <Layout className={layout}>
      <Header />
      <Content>
        <UserProfile />
      </Content>
      <Footer />
    </Layout>
  );
}

export default UserProfileLayout;
