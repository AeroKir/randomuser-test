import { connect } from 'react-redux';
import { filterByGender, filterByNationality, filterByName } from '../../actions/contactsPage';
import ContactsSearchFilterForm from './ContactsSearchFilterForm';

function mapDispatchToProps(dispatch) {
  return {
    genderFilter: (genderValue) => dispatch(filterByGender(genderValue)),
    nationalityFilter: (nationalityValue) => dispatch(filterByNationality(nationalityValue)),
    nameFilter: (nameValue) => dispatch(filterByName(nameValue)),
  };
}

const ContactsSearchFilterFormContainer = connect(null, mapDispatchToProps)(ContactsSearchFilterForm);

export default ContactsSearchFilterFormContainer;
