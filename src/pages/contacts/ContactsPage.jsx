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
import TiledView from '../../components/contacts-views/TiledView';
import StatisticBlock from '../../components/statistic/StatisticBlock';

import 'antd/dist/antd.css';
import './ContactsPage.css';

function ContactsPage({
  contactsCollection,
  isLoading,
  isTiledView,
  isTableView,
  handleTiledView,
  handleTabularView,
  collectionSize,
  malesAmount,
  femalesAmount,
  indeterminateAmount,
  contactsPerPage,
  currentPage,
  defaultCurrentPage,
  handlePaginate,
  handleFetchContacts,
}) {
  const { Content } = Layout;

  const { Title, Text } = Typography;
  const serviceContainer = classNames('ContactsPage-serviceContainer');
  const viewSwitcherButton = classNames('ViewSwitcherButton');

  const onContactsUpdate = () => {
    handleFetchContacts();
  };

  const handleChange = (number, contactsAmount) => {
    handlePaginate(number, contactsAmount);
  };

  // Get current contacts
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contactsCollection.slice(indexOfFirstContact, indexOfLastContact);

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
                onClick={onContactsUpdate}
                loading={isLoading}
              />
            </Tooltip>

            <Tooltip title="Tiled view">
              <Button
                type={isTiledView ? 'primary' : 'default'}
                icon={<AppstoreOutlined />}
                className={viewSwitcherButton}
                onClick={handleTiledView}
              />
            </Tooltip>

            <Tooltip title="Tabular view">
              <Button
                type={isTableView ? 'primary' : 'default'}
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
          <TableView contactsCollection={currentContacts} isLoading={isLoading} />
        ) : (
          <Row justify="center">
            <TiledView contactsCollection={currentContacts} isLoading={isLoading} />
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
                <Statistic title="Collection size" value={collectionSize} />
              </Col>
              <Col>
                <Statistic title="Males" value={malesAmount} />
              </Col>
              <Col>
                <Statistic title="Females" value={femalesAmount} />
              </Col>
              <Col>
                <Statistic title="Indeterminate" value={indeterminateAmount} />
              </Col>
            </Row>
            <Row>
              <Col>
                {malesAmount > femalesAmount
                  ? <Text mark>Men predominate</Text> : <Text mark>Women predominate</Text>}

              </Col>
            </Row>
            <Text type="secondary">Nationalities</Text>
            <StatisticBlock />
          </div>
        </Space>

        <Pagination
          size="small"
          defaultCurrent={defaultCurrentPage}
          total={collectionSize}
          defaultPageSize={contactsPerPage}
          showSizeChanger
          onChange={handleChange}
        />
      </div>

    </Content>
  );
}

ContactsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleFetchContacts: PropTypes.func.isRequired,
  handleTiledView: PropTypes.func.isRequired,
  handleTabularView: PropTypes.func.isRequired,
  handlePaginate: PropTypes.func.isRequired,
  contactsCollection: PropTypes.arrayOf(PropTypes.object),
  isTableView: PropTypes.bool,
  isTiledView: PropTypes.bool,
  collectionSize: PropTypes.number,
  malesAmount: PropTypes.number,
  femalesAmount: PropTypes.number,
  indeterminateAmount: PropTypes.number,
  contactsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  defaultCurrentPage: PropTypes.number,
};

ContactsPage.defaultProps = {
  contactsCollection: [{}],
  isTableView: true,
  isTiledView: false,
  collectionSize: 0,
  malesAmount: 0,
  femalesAmount: 0,
  indeterminateAmount: 0,
  contactsPerPage: 10,
  currentPage: 1,
  defaultCurrentPage: 1,
};

export default ContactsPage;
