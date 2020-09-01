import { connect } from 'react-redux';
import { hideSignInForm } from '../../actions/signInForm';
import SignInForm from './SignInForm';

const mapStateToProps = ({ signInFormReducer }) => ({
  isVisible: signInFormReducer.user.isSignInFormShowed,
});

function mapDispatchToProps(dispatch) {
  return {
    handleFormClose: () => dispatch(hideSignInForm()),
  };
}

const SignInFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default SignInFormContainer;
