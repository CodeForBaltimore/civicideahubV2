import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state: Object) => {
  return {
    events: state.eventState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {},
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
