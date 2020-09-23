import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Spin } from 'antd';
import { useRouteMatch } from 'react-router-dom';

import ContactCard from '../contact-card/ContactCard';

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
    <Row gutter={[16, 20]}>
      {contactsCollection.map((contact, item) => (
        <Col span={8}>
          <ContactCard
            url={url}
            id={item + 1}
            contactCardImage={contact.picture.medium}
            contactCardTitle={`${contact.name.title}. ${contact.name.first} ${contact.name.last}`}
            contactCardTitleSecondary={`(${contact.dob.age} years)`}
            contactCardEmail={contact.email}
            contactCardPhone={contact.phone}
            contactCardLocation={
              `/${contact.location.country}/
               ${contact.location.street.number}
               ${contact.location.street.name},
               ${contact.location.city},
               ${contact.location.state}
               ${contact.location.postcode}`
            }
            contactCardNationality={contact.nat}
          />
        </Col>
      ))}
    </Row>
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
