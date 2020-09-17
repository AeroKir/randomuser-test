import { connect } from 'react-redux';
import { filterByGender, filterByNationality } from '../../actions/contactsPage';
import ContactsSearchFilterForm from './ContactsSearchFilterForm';

function mapDispatchToProps(dispatch) {
  return {
    genderFilter: (genderValue) => dispatch(filterByGender(genderValue)),
    nationalityFilter: (nationalityValue) => dispatch(filterByNationality(nationalityValue)),
  };
}

const ContactsSearchFilterFormContainer = connect(null, mapDispatchToProps)(ContactsSearchFilterForm);

export default ContactsSearchFilterFormContainer;
