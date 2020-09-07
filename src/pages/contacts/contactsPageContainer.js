import { connect } from 'react-redux';
import { setTiledView, setTableView } from '../../actions/contactsPage';
import ContactsPage from './ContactsPage';

const mapStateToProps = ({ contacts }) => {
  const { isTableView, isTiledView } = contacts;

  return {
    isTableView,
    isTiledView,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleTiledView: () => dispatch(setTiledView()),
    handleTabularView: () => dispatch(setTableView()),
  };
}

const ContactsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

export default ContactsPageContainer;
