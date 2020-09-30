import { connect } from 'react-redux';
import {
  filterByGender,
  filterByNationality,
  filterByName,
  clearFiltersForm,
} from '../../actions/contactsPage';
import ContactsSearchFilterForm from './ContactsSearchFilterForm';

function mapStateToProps({ contacts }) {
  const { isContactFilterClearDisabled } = contacts;
  return {
    isContactFilterClearDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    genderFilter: (genderValue) => dispatch(filterByGender(genderValue)),
    nationalityFilter: (nationalityValue) => dispatch(filterByNationality(nationalityValue)),
    nameFilter: (nameValue) => dispatch(filterByName(nameValue)),
    handleClearForm: () => dispatch(clearFiltersForm()),
  };
}

const ContactsSearchFilterFormContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsSearchFilterForm);

export default ContactsSearchFilterFormContainer;
