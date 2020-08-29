import React from 'react';
import {
  Table, Avatar, Tag, Typography,
} from 'antd';

function TabularView() {
  const { Text } = Typography;

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (<Avatar src={avatar} size="large" />),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName - b.fullName,
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
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
      render: (nationality) => (<Tag>{nationality}</Tag>),
      align: 'right',
    },
  ];

  const data = [
    {
      key: '1',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      fullName: 'Ivan Ivanov',
      birthday: '01.01.01',
      email: 'email@example.com',
      phone: '+123456789',
      location: '/New Zealand/ 6257 Esmonde Road, Timaru, Wellington 27976',
      nationality: 'New Zelander',
    },
    {
      key: '2',
      avatar: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
      fullName: 'Petr Petrov',
      birthday: '01.01.01',
      email: 'petr-petrov@example.com',
      phone: '+123456789',
      location: '/New Zealand/ 6257 Esmonde Road, Timaru, Wellington 27976',
      nationality: 'Uzbek',
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  );
}

export default TabularView;
