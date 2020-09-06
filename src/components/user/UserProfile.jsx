import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Divider, Tag, Spin,
} from 'antd';
import classNames from 'classnames';

import AppImage from '../image/AppImage';

import 'antd/dist/antd.css';
import './UserProfile.css';

function UserProfile({
  userData,
  isUserDataLoading,
}) {
  const { Title, Text } = Typography;

  const userProfile = classNames('UserProfile');
  const userProfileBody = classNames('UserProfile-body');
  const userProfileImage = classNames('UserProfile-userImage');
  const userProfileInfo = classNames('UserProfile-userInfo');
  const userContactsList = classNames('UserProfile-userContactsList');
  const userContactsItem = classNames('UserProfile-userContactsItem');

  if (isUserDataLoading) {
    return <Spin size="large" />;
  }

  return (
    <div className={userProfile}>
      <Title level={1} style={{ fontSize: '32px' }}>Profile</Title>
      <div className={userProfileBody}>

        {userData.map((user) => (
          <Fragment key={user.login.uuid}>
            <AppImage className={userProfileImage} src={user.picture.medium} />
            <div className={userProfileInfo}>
              <Title level={3}>
                {`${user.name.title}. ${user.name.first} ${user.name.last}`}
                <Text
                  type="secondary"
                  style={{ fontSize: '19px', paddingLeft: '5px' }}
                >
                  {`(${user.dob.age} years)`}
                </Text>
              </Title>
              <Divider dashed style={{ margin: '12px 0' }} />

              <ul className={userContactsList}>
                <li className={userContactsItem}>
                  <Text copyable={{ text: user.email }} style={{ paddingRight: '8px' }} />
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </li>
                <li className={userContactsItem}>
                  <Text copyable={{ text: user.phone }} style={{ paddingRight: '8px' }} />
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </li>
                <li className={userContactsItem}>
                  <Text
                    copyable={{
                      text: `[${user.location.country}]
                             ${user.location.street.number}
                             ${user.location.street.name},
                             ${user.location.city},
                             ${user.location.state}
                             ${user.location.postcode}`,
                    }}
                    style={{ paddingRight: '8px' }}
                  />
                  <Text strong style={{ color: '#5b5b6b' }}>{`/${user.location.country}/`}</Text>
                  <br />
                  {' '}
                  <Text type="secondary" style={{ color: '#5b5b6b' }} ellipsis>
                    {`${user.location.street.number}
                      ${user.location.street.name},
                      ${user.location.city},
                      ${user.location.state}
                      ${user.location.postcode}`}
                  </Text>
                </li>
              </ul>

              <Divider dashed style={{ margin: '12px 0' }} />
              <Tag>{user.nat}</Tag>
            </div>
          </Fragment>
        ))}

      </div>
    </div>
  );
}

UserProfile.propTypes = {
  isUserDataLoading: PropTypes.bool,
  userData: PropTypes.arrayOf(PropTypes.shape({
    gender: PropTypes.string,
    name: {
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
    },
    location: {
      street: {
        number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string,
      },
      city: PropTypes.string,
      state: PropTypes.string,
      postcode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      coordinates: {
        latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      },
      timezone: {
        offset: PropTypes.string,
        description: PropTypes.string,
      },
    },
    email: PropTypes.string,
    login: {
      uuid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      username: PropTypes.string,
      password: PropTypes.string,
      salt: PropTypes.string,
      md5: PropTypes.string,
      sha1: PropTypes.string,
      sha256: PropTypes.string,
    },
    dob: {
      date: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    },
    registered: {
      date: PropTypes.string,
      age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    },
    phone: PropTypes.string,
    cell: PropTypes.string,
    id: {
      name: PropTypes.string,
      value: PropTypes.string,
    },
    picture: {
      large: PropTypes.string,
      medium: PropTypes.string,
      thumbnail: PropTypes.string,
    },
    nat: PropTypes.string,
  })),
};

UserProfile.defaultProps = {
  isUserDataLoading: false,
  userData: [
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      location: {
        street: { number: 5421, name: 'Avenue Paul Eluard' },
        city: 'kilcoole',
        state: 'waterford',
        postcode: '93027',
        coordinates: {
          latitude: '20.9267',
          longitude: '-7.9310',
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland',
        },
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
      },
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17,
      },
      phone: '011-962-7516',
      cell: '081-454-0666',
      id: {
        name: 'PPS',
        value: '0390511T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
      nat: 'IE',
    },
  ],
};

export default UserProfile;
