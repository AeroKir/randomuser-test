import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { TextField } from 'redux-form-antd';
import { Modal, Button } from 'antd';
import {
  CloseOutlined, LockOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined,
} from '@ant-design/icons';

const emailRequired = (value) => (value || typeof value === 'number' ? undefined : 'The email field is required.');
const passwordRequired = (value) => (value || typeof value === 'number' ? undefined : 'The password field is required.');
const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'The email format is invalid.'
  : undefined);
const minLength = (min) => (value) => (value && value.length < min ? `The password must be at least ${min} characters.` : undefined);
const minLength8 = minLength(8);

let SignInForm = ({
  isVisible, handleFormSubmit, handleFormClose, isFormValid, invalid,
}) => {
  const onClickAction = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const eyeVisible = <EyeOutlined onClick={togglePasswordVisiblity} />;
  const eyeInvisible = <EyeInvisibleOutlined onClick={togglePasswordVisiblity} />;

  return (
    <Modal
      title="Sign In"
      centered
      visible={isVisible}
      closable={false}
      footer={null}
    >
      <form onSubmit={onClickAction}>
        <div style={{ marginBottom: '15px' }}>
          <Field
            name="userEmail"
            type="email"
            component={TextField}
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
            validate={[emailRequired, email]}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Field
            name="userPassword"
            type={passwordShown ? 'text' : 'password'}
            placeholder="Password"
            component={TextField}
            visibilityToggle
            size="large"
            prefix={<LockOutlined />}
            suffix={passwordShown ? eyeVisible : eyeInvisible}
            validate={[passwordRequired, minLength8]}
          />
        </div>

        <Button
          key="signin"
          type="primary"
          htmlType="submit"
          disabled={invalid || isFormValid}
        >
          Sign In
        </Button>
        <Button
          key="cancel"
          type="text"
          danger
          icon={<CloseOutlined />}
          onClick={handleFormClose}
        >
          Cancel
        </Button>
      </form>

    </Modal>
  );
};

SignInForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleFormClose: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

const selector = formValueSelector('signInForm');

SignInForm = connect((state) => {
  const userEmail = selector(state, 'userEmail');
  const userPassword = selector(state, 'userPassword');

  return {
    userEmail,
    userPassword,
  };
})(SignInForm);

export default reduxForm({
  form: 'signInForm',
})(SignInForm);
