import React from 'react';
import { Button, Tooltip } from 'antd';
import {
  ReloadOutlined, AppstoreOutlined, BarsOutlined,
} from '@ant-design/icons';

function ContactsViewSwitcher() {
  return (
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
        />
      </Tooltip>

      <Tooltip title="Tabular view">
        <Button
          icon={<BarsOutlined />}
        />
      </Tooltip>
    </div>
  );
}

export default ContactsViewSwitcher;
