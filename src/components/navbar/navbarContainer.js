import { connect } from 'react-redux';
import { fetchContacts } from '../../actions/contactsPage';
import Navbar from './Navbar';

const mapStateToProps = ({ preloadedState }) => {
  return {
    isUserLoggedOut: !preloadedState.isUserSignedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleFetchContacts: () => dispatch(fetchContacts()),
  };
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
