import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = state => {
  return {
    location: state.satellite.position,
    info: state.satellite.info
  };
};

export default connect(mapStateToProps)(Info);
