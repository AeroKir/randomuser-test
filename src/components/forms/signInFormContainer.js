import { connect } from 'react-redux';
import { hideSignInForm, fetchUser, switchToUserProfile } from '../../actions/signInForm';
import SignInForm from './SignInForm';

const mapStateToProps = ({ preloadedState }) => ({
  isVisible: preloadedState.isSignInFormShowed,
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
