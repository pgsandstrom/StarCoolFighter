import { combineReducers } from 'redux';

import tileReducer from './tile/reducer';

const rootReducer = combineReducers({
  tileReducer,
});

export default rootReducer;
