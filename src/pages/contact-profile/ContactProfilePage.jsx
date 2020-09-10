import React from 'react';
import { Layout, Button, Spin } from 'antd';
import { useParams, useRouteMatch } from 'react-router-dom';

// import UserProfileContainer from '../../components/user/userProfileContainer';

function ContactProfilePage({ contact, handleClick, isLoading }) {
  const { Content } = Layout;

  if (isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <Content>
      <h1>User with</h1>
      <p>contact.id</p>
      <Button type="primary" onClick={handleClick}>Back</Button>
    </Content>
  );
}

export default ContactProfilePage;
