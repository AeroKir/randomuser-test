import React from 'react';
import {
  Modal,
  Button,
  Form,
  Input,
} from 'antd';
import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

function SignInForm() {
  const isVisible = false;
  return (
    <Modal
      title="Sign In"
      centered
      visible={isVisible}
      closable={false}
      footer={[
        <Button
          key="signin"
          type="primary"
        >
          Sign In
        </Button>,
        <Button
          key="cancel"
          type="text"
          danger
          icon={<CloseOutlined />}
        >
          Cancel
        </Button>,
      ]}
    >
      <Form>
        <Form.Item
          rules={[{ required: true, message: 'The email field is required.' }]}
          extra="Type any valid email"
        >
          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'The password field is required.' }]}
          extra="Type any valid password"
        >
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default SignInForm;
