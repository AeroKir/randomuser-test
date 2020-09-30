import { connect } from 'react-redux';
import { goHome } from '../../actions/userProfile';
import Page404 from './Page404';

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(goHome()),
  };
}

const Page404Container = connect(null, mapDispatchToProps)(Page404);

export default Page404Container;
