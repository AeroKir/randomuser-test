import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Tooltip,
  Pagination,
  Statistic,
  Space,
} from 'antd';
import {
  ReloadOutlined, AppstoreOutlined, BarsOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContactsSearchFilterForm from '../../components/forms/ContactsSearchFilterForm';
import TabularView from '../../components/contacts-views/TabularView';
import TiledView from '../../components/contacts-views/TiledView';
import StatisticBlock from '../../components/statistic/StatisticBlock';

import 'antd/dist/antd.css';
import './ContactsPageLayout.css';

function ContactsPageLayout() {
  const { Content } = Layout;

  const { Title, Text } = Typography;
  const layout = classNames('Layout');
  const serviceContainer = classNames('ContactsPage-serviceContainer');

  return (
    <Layout className={layout}>
      <Header />

      <Content>
        <div className="ContactsPage">
          <div className="ContactsPage-header">
            <Title level={1} style={{ fontSize: '32px' }}>Contacts</Title>
            <div className="ContactsPage-dashboard">
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
                />
              </Tooltip>

              <Tooltip title="Tabular view">
                <Button
                  icon={<BarsOutlined />}
                />
              </Tooltip>

            </div>
          </div>

          <Space style={{
            backgroundColor: '#fafafa', width: '100%', padding: '10px', marginBottom: '15px',
          }}
          >
            <div className={serviceContainer}>
              <ContactsSearchFilterForm />
            </div>
          </Space>

          <Row justify="center">
            <TiledView />
          </Row>

          <TabularView />

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
      <Footer />
    </Layout>
  );
}

export default ContactsPageLayout;
