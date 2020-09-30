import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { useRouteMatch } from 'react-router-dom';

import ContactCard from '../contact-card/ContactCard';
import generateKey from '../../utils/generateKey';

function TiledView({
  contactsCollection, isLoading,
}) {
  const { url } = useRouteMatch();

  if (isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <>
      {contactsCollection.map((contact, item) => (
        <ContactCard
          key={generateKey()}
          url={url}
          id={item + 1}
          contactCardImage={contact.picture.medium}
          contactCardTitle={`${contact.name.title}. ${contact.name.first} ${contact.name.last}`}
          contactCardTitleSecondary={`(${contact.dob.age} years)`}
          contactCardEmail={contact.email}
          contactCardPhone={contact.phone}
          contactCardLocationCountry={contact.location.country}
          contactCardLocation={
            `${contact.location.street.number}
                ${contact.location.street.name},
                ${contact.location.city},
                ${contact.location.state}
                ${contact.location.postcode}`
          }
          contactCardNationality={contact.nat}
        />
      ))}
    </>
  );
}

TiledView.propTypes = {
  contactsCollection: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
};

TiledView.defaultProps = {
  contactsCollection: [{}],
};

export default TiledView;
