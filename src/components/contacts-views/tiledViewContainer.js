import { connect } from 'react-redux';
import TiledView from './TiledView';

const mapStateToProps = ({ contacts }) => {
  const { contactsCollection, isLoading } = contacts;

  return {
    contactsCollection,
    isLoading,
  };
};

const TiledViewContainer = connect(mapStateToProps, null)(TiledView);

export default TiledViewContainer;
