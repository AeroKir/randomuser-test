import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import Navbar from './Navbar';

const mapStateToProps = ({ preloadedState }) => {
  return {
    isUserLoggedOut: !preloadedState.isUserSignedIn,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     handleSignIn: () => dispatch(showSignInForm()),
//   };
// }

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;
