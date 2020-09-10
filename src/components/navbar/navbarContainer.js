import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = ({ preloadedState }) => {
  return {
    isUserLoggedOut: !preloadedState.isUserSignedIn,
  };
};

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;
