import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import Header from './Header';

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: () => dispatch(showSignInForm()),
  };
}

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;
