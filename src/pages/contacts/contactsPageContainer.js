import { connect } from 'react-redux';
import {
  fetchContacts,
  setTiledView,
  setTableView,
  paginate,
} from '../../actions/contactsPage';
import ContactsPage from './ContactsPage';

const mapStateToProps = ({ contacts }) => {
  const {
    contactsCollection,
    isLoading,
    isTableView,
    isTiledView,
    contactsPerPage,
    currentPage,
  } = contacts;

  const malesAmount = contactsCollection.filter((contact) => contact.gender === 'male');
  const femalesAmount = contactsCollection.filter((contact) => contact.gender === 'female');
  const indeterminateAmount = contactsCollection.filter((contact) => contact.gender === 'indeterminate');

  return {
    contactsCollection,
    isLoading,
    isTableView,
    isTiledView,
    contactsPerPage,
    currentPage,
    collectionSize: contactsCollection.length,
    malesAmount: malesAmount.length,
    femalesAmount: femalesAmount.length,
    indeterminateAmount: indeterminateAmount.length,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleFetchContacts: () => dispatch(fetchContacts()),
    handleTiledView: () => dispatch(setTiledView()),
    handleTabularView: () => dispatch(setTableView()),
    handlePaginate: (number, contactsPerPage) => dispatch(paginate(number, contactsPerPage)),
  };
}

const ContactsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

export default ContactsPageContainer;
