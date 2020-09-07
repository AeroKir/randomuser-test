import { connect } from 'react-redux';
import TableView from './TableView';

const mapStateToProps = ({ contacts }) => {
  const { contactsCollection, isLoading } = contacts;

  return {
    contactsCollection,
    isLoading,
  };
};

const TableViewContainer = connect(mapStateToProps, null)(TableView);

export default TableViewContainer;
