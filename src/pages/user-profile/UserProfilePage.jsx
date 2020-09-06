import React from 'react';
import { Layout } from 'antd';

import UserProfileContainer from '../../components/user/userProfileContainer';

function UserProfilePage() {
  const { Content } = Layout;

  return (
    <Content>
      <UserProfileContainer />
    </Content>
  );
}

export default UserProfilePage;
