import { combineReducers } from 'redux';
import headerReducer from './header_reducer';
import infoReducer from './info_reducer';

const rootReducer = combineReducers({
  header: headerReducer,
  info: infoReducer
});

export default rootReducer;
