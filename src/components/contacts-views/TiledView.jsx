import React from 'react';
import {
  Avatar,
  Tag,
  Typography,
  Row,
  Col,
} from 'antd';

import ContactCard from '../contact-card/ContactCard';

function TiledView() {
  const { Text } = Typography;

  const text = {
    values: [
      {
        email: 'example@mail.com',
        phone: '+7789716293',
        location: '6655 Bollinger Rd, Cape Fear, Tennessee 49132',
      },
    ],
  };

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
    {
      key: '3',
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
    <Row gutter={[16, 20]}>
      {data.map((item) => (
        <Col span={8}>
          <ContactCard />
        </Col>
      ))}
    </Row>
  );
}

export default TiledView;
