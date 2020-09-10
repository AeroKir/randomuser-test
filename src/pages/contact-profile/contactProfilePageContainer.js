import { connect } from 'react-redux';
import { backToContacts } from '../../actions/contactsPage';
import ContactProfilePage from './ContactProfilePage';

function mapStateToProps({ contacts }) {
  const { isContactProfileLoading } = contacts;
  return {
    isLoading: isContactProfileLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(backToContacts()),
  };
}

const ContactProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactProfilePage);

export default ContactProfilePageContainer;
