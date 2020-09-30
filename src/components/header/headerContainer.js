import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import Header from './Header';

const mapStateToProps = ({ preloadedState }) => ({
  isSignedIn: preloadedState.isUserSignedIn,
});

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: () => dispatch(showSignInForm()),
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
