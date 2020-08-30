import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import HomePage from '../../pages/home/HomePage';
import UserProfilePage from '../../pages/user-profile/UserProfilePage';
import ContactsPage from '../../pages/contacts/ContactsPage';

import './BaseAppLayout.css';

function BaseAppLayout() {
  const layout = classNames('BaseAppLayout');

  return (
    <Layout className={layout}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={UserProfilePage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)} />
      </Switch>
      <Footer />
    </Layout>
  );
}

export default BaseAppLayout;
