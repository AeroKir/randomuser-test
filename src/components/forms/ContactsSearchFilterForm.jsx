import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import NATIONALITIES from '../../constants/nationalities';

function ContactsSearchFilterForm({ genderFilter, nationalityFilter }) {
  const { Option } = Select;

  const handleGenderFilter = (genderValue) => {
    genderFilter(genderValue);
  };

  const handleNationalityFilter = (nationalityValue) => {
    nationalityFilter(nationalityValue);
  };

  return (
    <Form layout="inline">

      <Form.Item>
        <Input.Search
          placeholder="Search by full name"
          size="large"
          style={{ width: 530 }}
          onSearch={(value) => console.log(value)}
        />
      </Form.Item>

      <Form.Item>
        <Select
          placeholder="Gender"
          size="large"
          allowClear
          style={{ width: 195 }}
          onChange={handleGenderFilter}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="indeterminate">Indeterminate</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Select
          placeholder="Nationality"
          mode="tags"
          size="large"
          style={{ width: 245 }}
          onChange={handleNationalityFilter}
        >
          {Object.keys(NATIONALITIES).map((nat, item) => {
            const nationalityName = Object.values(NATIONALITIES)[item].name;
            return <Option value={nationalityName}>{nationalityName}</Option>;
          })}
        </Select>
      </Form.Item>

      <Form.Item>
        <Checkbox>I am creator</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          key="cancel"
          type="link"
          icon={<CloseOutlined />}
          style={{ marginLeft: '10px' }}
          disabled
        >
          Clear
        </Button>
      </Form.Item>

    </Form>
  );
}

ContactsSearchFilterForm.propTypes = {
  genderFilter: PropTypes.func.isRequired,
  nationalityFilter: PropTypes.func.isRequired,
};

export default ContactsSearchFilterForm;
