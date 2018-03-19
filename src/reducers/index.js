import { combineReducers } from 'redux';
import headerReducer from './header_reducer';

const rootReducer = combineReducers({
  header: headerReducer
});

export default rootReducer;
