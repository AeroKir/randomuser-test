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
    collectionLength,
    males,
    females,
    indeterminate,
    isLoading,
    isTableView,
    isTiledView,
    contactsPerPage,
    currentPage,
  } = contacts;

  return {
    contactsCollection,
    isLoading,
    isTableView,
    isTiledView,
    contactsPerPage,
    currentPage,
    collectionSize: collectionLength,
    malesAmount: males,
    femalesAmount: females,
    indeterminateAmount: indeterminate,
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
