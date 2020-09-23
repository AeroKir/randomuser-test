import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import AppImage from '../image/AppImage';
import NationalityTag from '../nationality-tag/NationalityTag';

import 'antd/dist/antd.css';
import './ContactCard.css';

function ContactCard({
  url,
  id,
  contactCardImage,
  contactCardTitle,
  contactCardTitleSecondary,
  contactCardEmail,
  contactCardPhone,
  contactCardLocation,
  contactCardNationality,
}) {
  const {
    Title, Text,
  } = Typography;

  const userContactsList = classNames('UserProfile-userContactsList');
  const userContactsItem = classNames('UserProfile-userContactsItem');

  return (

    <Card
      hoverable
      cover={<AppImage src={contactCardImage} />}
    >

      <NavLink
        url={url}
        to={`${url}/${id}`}
      >
        <Title level={3} style={{ textAlign: 'left' }}>
          {contactCardTitle}
          <Text
            type="secondary"
            style={{ fontSize: '19px', paddingLeft: '5px' }}
          >
            {contactCardTitleSecondary}
          </Text>
        </Title>
      </NavLink>

      <Divider dashed style={{ margin: '12px 0' }} />

      <ul className={userContactsList}>
        <li className={userContactsItem}>
          <Text copyable={{ text: contactCardEmail }} style={{ paddingRight: '8px' }} />
          <a href={`mailto:${contactCardEmail}`}>{contactCardEmail}</a>
        </li>
        <li className={userContactsItem}>
          <Text copyable={{ text: contactCardPhone }} style={{ paddingRight: '8px' }} />
          <a href={`tel:${contactCardPhone}`}>{contactCardPhone}</a>
        </li>
        <li className={userContactsItem}>
          <Text copyable={{ text: contactCardLocation }} style={{ paddingRight: '8px' }} />
          <span>{contactCardLocation}</span>
        </li>
      </ul>

      <Divider dashed style={{ margin: '12px 0' }} />
      <NationalityTag userNationality={contactCardNationality} />
    </Card>

  );
}

ContactCard.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  contactCardImage: PropTypes.string,
  contactCardTitle: PropTypes.string,
  contactCardTitleSecondary: PropTypes.string,
  contactCardEmail: PropTypes.string,
  contactCardPhone: PropTypes.string,
  contactCardLocation: PropTypes.string,
  contactCardNationality: PropTypes.string,
};

ContactCard.defaultProps = {
  contactCardImage: '',
  contactCardTitle: 'Card title',
  contactCardTitleSecondary: 'title secondary',
  contactCardEmail: 'mail@example.com',
  contactCardPhone: '1234567',
  contactCardLocation: 'Earth',
  contactCardNationality: 'Geek',
};

export default ContactCard;
