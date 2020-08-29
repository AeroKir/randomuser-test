import React from 'react';

import HomePageLayout from './layouts/home-page/HomePageLayout';
import UserProfileLayout from './layouts/user-profile-page/UserProfileLayout';
import ContactsPageLayout from './layouts/contacts-page/ContactsPageLayout';

import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePageLayout />
      <UserProfileLayout />
      <ContactsPageLayout />
    </div>
  );
}

export default App;
