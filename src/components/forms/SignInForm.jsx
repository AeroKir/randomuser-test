import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Form,
  Input,
} from 'antd';
import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

function SignInForm({ isVisible, handleFormClose }) {
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
          htmlType="submit"
        >
          Sign In
        </Button>,
        <Button
          key="cancel"
          type="text"
          danger
          icon={<CloseOutlined />}
          onClick={handleFormClose}
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
            name="email"
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
            name="password"
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

SignInForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleFormClose: PropTypes.func.isRequired,
};

export default SignInForm;
