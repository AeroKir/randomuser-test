import React from 'react';
import { Typography, Divider } from 'antd';
import classNames from 'classnames';

import AppImage from '../image/AppImage';
import Badge from '../badge/Badge';

import 'antd/dist/antd.css';
import './UserProfile.css';

function UserProfile() {
  const { Title, Text } = Typography;

  const userProfile = classNames('UserProfile');
  const userProfileBody = classNames('UserProfile-body');
  const userProfileImage = classNames('UserProfile-userImage');
  const userProfileInfo = classNames('UserProfile-userInfo');
  const userContactsList = classNames('UserProfile-userContactsList');
  const userContactsItem = classNames('UserProfile-userContactsItem');

  const text = {
    values: [
      {
        email: 'example@mail.com',
        phone: '+7789716293',
        location: '6655 Bollinger Rd, Cape Fear, Tennessee 49132',
      },
    ],
  };

  return (
    <div className={userProfile}>
      <Title level={1} style={{ fontSize: '32px' }}>Profile</Title>
      <div className={userProfileBody}>
        <AppImage className={userProfileImage} />
        <div className={userProfileInfo}>
          <Title level={3}>
            Mr. Herbert Phillips
            <Text
              type="secondary"
              style={{ fontSize: '19px', paddingLeft: '5px' }}
            >
              (41 years)
            </Text>
          </Title>
          <Divider dashed style={{ margin: '12px 0' }} />

          {text.values.map((i) => (
            <ul className={userContactsList}>
              <li className={userContactsItem}>
                <Text copyable={{ text: i.email }} style={{ paddingRight: '8px' }} />
                <a href="mailto:example@mail.com">{i.email}</a>
              </li>
              <li className={userContactsItem}>
                <Text copyable={{ text: i.phone }} style={{ paddingRight: '8px' }} />
                <a href="tel:+7789716293">{i.phone}</a>
              </li>
              <li className={userContactsItem}>
                <Text copyable={{ text: i.location }} style={{ paddingRight: '8px' }} />
                <span>{i.location}</span>
              </li>
            </ul>
          ))}
          <Divider dashed style={{ margin: '12px 0' }} />
          <Badge />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
