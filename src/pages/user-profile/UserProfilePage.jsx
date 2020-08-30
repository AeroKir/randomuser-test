import React from 'react';
import { Layout } from 'antd';

import UserProfile from '../../components/user/UserProfile';

function UserProfilePage() {
  const { Content } = Layout;

  return (
    <Content>
      <UserProfile />
    </Content>
  );
}

export default UserProfilePage;
