import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Route, Switch, Router } from 'react-router-dom';
import classNames from 'classnames';

import HeaderContainer from '../../components/header/headerContainer';
import SignInFormContainer from '../../components/forms/signInFormContainer';
import Footer from '../../components/footer/Footer';

import HomePage from '../../pages/home/HomePage';
import UserProfilePage from '../../pages/user-profile/UserProfilePage';
import ContactsPageContainer from '../../pages/contacts/contactsPageContainer';
import ContactProfilePage from '../../pages/contact-profile/ContactProfilePage';
import ContactProfilePageContainer from '../../pages/contact-profile/contactProfilePageContainer';
import Page404Container from '../../pages/page-404/page404Container';

import './BaseAppLayout.css';

function BaseAppLayout({ history }) {
  const layout = classNames('BaseAppLayout');
  const { location: { pathname } } = history;

  return (
    <Router history={history}>
      <Layout className={layout}>
        <HeaderContainer />

        <SignInFormContainer />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={UserProfilePage} />
          <Route exact path="/contacts" component={ContactsPageContainer} />
          <Route
            exact
            path={pathname}
            render={() => <ContactProfilePageContainer />}
            // component={ContactProfilePage}
          />
          <Route exact path="*" component={Page404Container} />
        </Switch>

        <Footer />
      </Layout>
    </Router>
  );
}

BaseAppLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default BaseAppLayout;
