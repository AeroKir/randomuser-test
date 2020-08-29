import React from 'react';
import {
  Row,
  Col,
  Typography,
} from 'antd';
import classNames from 'classnames';

function StatisticBlock() {
  const statData = {
    nationalities: [
      {
        nationality: 'New Zealander',
        contacts: 15,
      },
      {
        nationality: 'Australian',
        contacts: 15,
      },
      {
        nationality: 'British',
        contacts: 15,
      },
      {
        nationality: 'Spanish',
        contacts: 15,
      },
      {
        nationality: 'Finnish',
        contacts: 15,
      },
      {
        nationality: 'Danish',
        contacts: 15,
      },
      {
        nationality: 'Swiss',
        contacts: 15,
      },
      {
        nationality: 'Canadian',
        contacts: 15,
      },
      {
        nationality: 'French',
        contacts: 15,
      },
      {
        nationality: 'Dutch',
        contacts: 15,
      },
      {
        nationality: 'Norwegian',
        contacts: 15,
      },
      {
        nationality: 'Turkish',
        contacts: 15,
      },
      {
        nationality: 'Irish',
        contacts: 15,
      },
      {
        nationality: 'Brazilian',
        contacts: 15,
      },
      {
        nationality: 'German',
        contacts: 15,
      },
      {
        nationality: 'Iranian',
        contacts: 15,
      },
      {
        nationality: 'American',
        contacts: 15,
      },
    ],
  };

  const { Text } = Typography;
  return (
    <Row gutter={[16, 14]} justify="start" style={{ width: '90%' }}>
      {statData.nationalities.map((nationalityItem) => (
        <Col className="gutter-row" span={4} style={{ textAlign: 'left' }}>
          <Text strong>
            {nationalityItem.nationality}
            :
            {' '}
          </Text>
          <Text type="secondary" ellipsis>
            {nationalityItem.contacts}
            {' '}
            contacts
          </Text>
        </Col>
      ))}
    </Row>
  );
}

export default StatisticBlock;
