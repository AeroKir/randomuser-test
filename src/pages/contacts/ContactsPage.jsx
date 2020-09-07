import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Row,
  Col,
  Typography,
  Pagination,
  Statistic,
  Space,
  Button,
  Tooltip,
} from 'antd';
import {
  ReloadOutlined, AppstoreOutlined, BarsOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';

import ContactsSearchFilterForm from '../../components/forms/ContactsSearchFilterForm';
import TableView from '../../components/contacts-views/TableView';
import TableViewContainer from '../../components/contacts-views/tableViewContainer';
import TiledView from '../../components/contacts-views/TiledView';
import TiledViewContainer from '../../components/contacts-views/tiledViewContainer';
import StatisticBlock from '../../components/statistic/StatisticBlock';

import 'antd/dist/antd.css';
import './ContactsPage.css';

function ContactsPage({
  isTiledView,
  isTableView,
  handleTiledView,
  handleTabularView,
}) {
  const { Content } = Layout;

  const { Title, Text } = Typography;
  const serviceContainer = classNames('ContactsPage-serviceContainer');
  const viewSwitcherButton = classNames(
    'ViewSwitcherButton',
  );

  return (
    <Content>
      <div className="ContactsPage">
        <div className="ContactsPage-header">
          <Title level={1} style={{ fontSize: '32px' }}>Contacts</Title>
          <div>
            <Tooltip title="Update data">
              <Button
                shape="circle-outline"
                type="dashed"
                icon={<ReloadOutlined />}
                style={{ marginRight: '8px' }}
              />
            </Tooltip>

            <Tooltip title="Tiled view">
              <Button
                type="primary"
                icon={<AppstoreOutlined />}
                className={viewSwitcherButton}
                onClick={handleTiledView}
              />
            </Tooltip>

            <Tooltip title="Tabular view">
              <Button
                type="default"
                icon={<BarsOutlined />}
                className={viewSwitcherButton}
                onClick={handleTabularView}
              />
            </Tooltip>
          </div>
        </div>

        <Space style={{
          backgroundColor: '#fafafa', width: '100%', padding: '10px', marginBottom: '15px',
        }}
        >
          <div className={serviceContainer}>
            <ContactsSearchFilterForm active />
          </div>
        </Space>

        {isTableView ? (
          <TableViewContainer />
        ) : (
          <Row justify="center">
            <TiledViewContainer />
          </Row>
        )}

        <Space style={{
          backgroundColor: '#fafafa', width: '100%', padding: '10px', marginBottom: '15px',
        }}
        >
          <div className={serviceContainer}>
            <Title level={2}>Statistic</Title>
            <Row gutter={16}>
              <Col>
                <Statistic title="Collection size" value={278} />
              </Col>
              <Col>
                <Statistic title="Males" value={140} />
              </Col>
              <Col>
                <Statistic title="Females" value={138} />
              </Col>
              <Col>
                <Statistic title="Indeterminate" value={0} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Text mark>Men predominate</Text>
              </Col>
            </Row>
            <Text type="secondary">Nationalities</Text>
            <StatisticBlock />
          </div>
        </Space>

        <Pagination size="small" total={50} showSizeChanger />
      </div>

    </Content>
  );
}

ContactsPage.propTypes = {
  handleTiledView: PropTypes.func.isRequired,
  handleTabularView: PropTypes.func.isRequired,
  isTableView: PropTypes.bool,
  isTiledView: PropTypes.bool,
};

ContactsPage.defaultProps = {
  isTableView: true,
  isTiledView: false,
};

export default ContactsPage;
