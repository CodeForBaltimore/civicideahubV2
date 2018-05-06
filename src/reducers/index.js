import { combineReducers } from 'redux';
import entries from './entries';

var appReducer = combineReducers({
  entries,
});

var rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
