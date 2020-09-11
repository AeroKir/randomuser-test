import { connect } from 'react-redux';
import { fetchUser } from '../../actions/signInForm';
import UserProfile from './UserProfile';

const mapStateToProps = ({ preloadedState }) => {
  const { user, isLoading, isLoadingFail } = preloadedState;

  return {
    userData: user,
    isUserDataLoading: isLoading,
    isUserDataLoadingFail: isLoadingFail,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    attemptUserUpdate: () => dispatch(fetchUser()),
  };
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
