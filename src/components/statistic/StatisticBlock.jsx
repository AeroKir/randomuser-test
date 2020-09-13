import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Typography,
} from 'antd';

import NATIONALITIES from '../../constants/nationalities';

function StatisticBlock({ contactsData }) {
  const { Text } = Typography;

  return (
    <Row gutter={[16, 14]} justify="start" style={{ width: '90%' }}>
      {
        Object.keys(NATIONALITIES).map((nationality, item) => {
          const nationalityName = Object.values(NATIONALITIES)[item].name;
          const nationalityAmount = contactsData.filter((contact) => contact.nat === nationality);

          return (
            <Col className="gutter-row" span={4} style={{ textAlign: 'left' }}>
              <Text strong>
                {nationalityName}
                :
                {' '}
              </Text>
              <Text type="secondary" ellipsis>
                {nationalityAmount.length}
                {' '}
                {nationalityAmount.length === 1 ? 'contact' : 'contacts'}
              </Text>
            </Col>
          );
        })
      }
    </Row>
  );
}

StatisticBlock.propTypes = {
  contactsData: PropTypes.arrayOf(PropTypes.object),
};

StatisticBlock.defaultProps = {
  contactsData: [{}],
};

export default StatisticBlock;
