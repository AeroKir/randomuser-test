import { connect } from 'react-redux';
import { logout, goHome } from '../../actions/userProfile';
import UserProfileHeaderBlock from './UserProfileHeaderBlock';

const mapStateToProps = ({ preloadedState }) => {
  const { user, isLoading } = preloadedState;

  return {
    userData: user,
    isUserDataLoading: isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    goHomePage: () => dispatch(goHome()),
  };
}

const UserProfileHeaderBlockContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfileHeaderBlock);

export default UserProfileHeaderBlockContainer;
