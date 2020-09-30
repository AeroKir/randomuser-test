import { connect } from 'react-redux';
import Logo from './Logo';

const mapStateToProps = ({ preloadedState }) => ({
  isUserLoggedOut: !preloadedState.isUserSignedIn,
});

const LogoContainer = connect(mapStateToProps, null)(Logo);

export default LogoContainer;
