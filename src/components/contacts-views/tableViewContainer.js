import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import TableView from './TableView';

const mapStateToProps = ({ contacts }) => {
  const { contactsCollection, isLoading } = contacts;

  return {
    contactsCollection,
    isLoading,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     handleSignIn: () => dispatch(showSignInForm()),
//   };
// }

const TableViewContainer = connect(mapStateToProps, null)(TableView);

export default TableViewContainer;
