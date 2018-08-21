import { combineReducers } from 'redux';
import ideaHubState from './entries';

var appReducer = combineReducers({
  ideaHubState,
});

var rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
