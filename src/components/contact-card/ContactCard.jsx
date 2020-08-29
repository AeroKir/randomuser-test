import React from 'react';
import {
  Card,
  Typography,
  Divider,
} from 'antd';
import classNames from 'classnames';

import Badge from '../badge/Badge';
import AppImage from '../image/AppImage';

import 'antd/dist/antd.css';
import './ContactCard.css';

function ContactCard() {
  const {
    Title, Text,
  } = Typography;

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

    <Card
      hoverable
      cover={<AppImage />}
    >
      <Title level={3} style={{ textAlign: 'left' }}>
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
            <a href={`mailto:${i.email}`}>{i.email}</a>
          </li>
          <li className={userContactsItem}>
            <Text copyable={{ text: i.phone }} style={{ paddingRight: '8px' }} />
            <a href={`tel:${i.phone}`}>{i.phone}</a>
          </li>
          <li className={userContactsItem}>
            <Text copyable={{ text: i.location }} style={{ paddingRight: '8px' }} />
            <span>{i.location}</span>
          </li>
        </ul>
      ))}
      <Divider dashed style={{ margin: '12px 0' }} />
      <Badge />
    </Card>

  );
}

export default ContactCard;
