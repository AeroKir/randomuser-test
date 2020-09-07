import { connect } from 'react-redux';
import { showSignInForm } from '../../actions/signInForm';
import TiledView from './TiledView';

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

const TiledViewContainer = connect(mapStateToProps, null)(TiledView);

export default TiledViewContainer;
