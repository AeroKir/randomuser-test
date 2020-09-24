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
  contactCardLocationCountry,
  contactCardLocation,
  contactCardNationality,
}) {
  const { Text, Link } = Typography;

  const contactCard = classNames('ContactCard');
  const contactCardPicture = classNames('ContactCard-picture');
  const contactCardContactsList = classNames('ContactCard-contactsList');
  const contactCardContactsItem = classNames('ContactCard-contactsItem');
  const contactCardSecondaryColor = classNames('ContactCard--secondaryColor');

  return (

    <Card
      className={contactCard}
      hoverable
    >

      <NavLink
        url={url}
        to={`${url}/${id}`}
      >
        <AppImage className={contactCardPicture} src={contactCardImage} />
        <Link href={`${url}/${id}`} style={{ fontSize: 18, textAlign: 'left' }}>
          {contactCardTitle}
          <Text
            type="secondary"
            style={{ fontSize: '12px', paddingLeft: '5px' }}
          >
            {contactCardTitleSecondary}
          </Text>
        </Link>
      </NavLink>

      <Divider dashed style={{ margin: '12px 0' }} />

      <ul className={contactCardContactsList}>
        <li className={contactCardContactsItem}>
          <Text copyable={{ text: contactCardEmail }} style={{ paddingRight: '8px' }} ellipsis={{ rows: 1 }} />
          <a href={`mailto:${contactCardEmail}`}>{contactCardEmail}</a>
        </li>
        <li className={contactCardContactsItem}>
          <Text copyable={{ text: contactCardPhone }} style={{ paddingRight: '8px' }} />
          <a href={`tel:${contactCardPhone}`}>{contactCardPhone}</a>
        </li>
        <li className={contactCardContactsItem}>
          <Text
            copyable={{
              text: `[${contactCardLocationCountry}] ${contactCardLocation}`,
            }}
            style={{ paddingRight: '8px' }}
          />
          <Text strong className={contactCardSecondaryColor}>{`/${contactCardLocationCountry}/`}</Text>
          <br />
          <span className={contactCardSecondaryColor}>{contactCardLocation}</span>
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
  contactCardLocationCountry: PropTypes.string,
  contactCardNationality: PropTypes.string,
};

ContactCard.defaultProps = {
  contactCardImage: '',
  contactCardTitle: 'Card title',
  contactCardTitleSecondary: 'title secondary',
  contactCardEmail: 'mail@example.com',
  contactCardPhone: '1234567',
  contactCardLocation: 'Earth',
  contactCardLocationCountry: 'USA',
  contactCardNationality: 'Geek',
};

export default ContactCard;
