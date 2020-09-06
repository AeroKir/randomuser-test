import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import UserProfile from './UserProfile';

const mapStateToProps = ({ preloadedState }) => {
  const { user, isLoading } = preloadedState;

  return {
    userData: user,
    isUserDataLoading: isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: () => dispatch(showSignInForm()),
  };
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
