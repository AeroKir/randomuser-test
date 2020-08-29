import React from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

function ContactsSearchFilterForm() {
  const { Option } = Select;
  const nationalities = [
    { value: 'American' },
    { value: 'Australian' },
    { value: 'Brazilian' },
    { value: 'British' },
    { value: 'Canadian' },
    { value: 'Danish' },
    { value: 'Dutch' },
    { value: 'Finnish' },
    { value: 'French' },
    { value: 'German' },
    { value: 'Iranian' },
    { value: 'Irish' },
    { value: 'New Zealander' },
    { value: 'Norwegian' },
    { value: 'Spanish' },
    { value: 'Swiss' },
    { value: 'Turkish' },
  ];

  return (
    <Form layout="inline">

      <Form.Item>
        <Input.Search placeholder="Search by full name" size="large" style={{ width: 530 }} />
      </Form.Item>

      <Form.Item>
        <Select placeholder="Gender" size="large" style={{ width: 195 }}>
          <Option>Male</Option>
          <Option>Female</Option>
          <Option>Indeterminate</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Select placeholder="Nationality" mode="tags" size="large" style={{ width: 245 }}>
          {nationalities.map((nationality) => (
            <Option value={nationality.value}>{nationality.value}</Option>
          ))}
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
        >
          Clear
        </Button>
      </Form.Item>

    </Form>
  );
}

export default ContactsSearchFilterForm;
