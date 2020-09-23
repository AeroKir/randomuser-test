import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  Table, Avatar, Typography, Spin,
} from 'antd';
import NationalityTag from '../nationality-tag/NationalityTag';

function TableView({ contactsCollection, isLoading }) {
  const { Text } = Typography;

  const { url } = useRouteMatch();

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar, key) => (
        <NavLink
          url={url}
          to={`${url}/${key.key}`}
        >
          <Avatar src={avatar} size="large" />
        </NavLink>
      ),
      width: 80,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (name, key) => (
        <NavLink
          url={url}
          to={`${url}/${key.key}`}
        >
          {name}
        </NavLink>
      ),
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      width: 170,
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      width: 250,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => (
        <span>
          <Text copyable={{ text: email }} style={{ paddingRight: '8px' }} />
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      ),
      ellipsis: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone) => (
        <span>
          <Text copyable={{ text: phone }} style={{ paddingRight: '8px' }} />
          <a href={`tel:${phone}`}>{phone}</a>
        </span>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (location) => (
        <span>
          <Text copyable={{ text: location }} style={{ paddingRight: '8px' }} />
          <span>{location}</span>
        </span>
      ),
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
      render: (nationality) => (<NationalityTag userNationality={nationality} />),
      align: 'right',
    },
  ];

  const data = contactsCollection.map((contact, item) => ({
    key: item + 1,
    avatar: contact.picture.thumbnail,
    fullName: `${contact.name.title}. ${contact.name.first} ${contact.name.last}`,
    birthday: `${contact.dob.date} ${contact.dob.age} years`,
    email: contact.email,
    phone: contact.phone,
    location: `/${contact.location.country}/
                ${contact.location.street.number}
                ${contact.location.street.name},
                ${contact.location.city},
                ${contact.location.state}
                ${contact.location.postcode}`,
    nationality: contact.nat,
  }));

  if (isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      style={{ marginBottom: 15, boxShadow: '0 5px 5px hsla(0,0%,40%,.1' }}
    />
  );
}

TableView.propTypes = {
  contactsCollection: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
};

TableView.defaultProps = {
  contactsCollection: [{}],
};

export default TableView;
