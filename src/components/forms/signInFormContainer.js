import { connect } from 'react-redux';
import { hideSignInForm, fetchUser, switchToUserProfile } from '../../actions/signInForm';
import SignInForm from './SignInForm';

const mapStateToProps = ({ signInFormReducer }) => ({
  isVisible: signInFormReducer.user.isSignInFormShowed,
});

function mapDispatchToProps(dispatch) {
  return {
    handleFormSubmit: () => dispatch(fetchUser()),
    switchToProfile: () => dispatch(switchToUserProfile()),
    handleFormClose: () => dispatch(hideSignInForm()),
  };
}

const SignInFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default SignInFormContainer;
