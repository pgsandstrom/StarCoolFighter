import { combineReducers } from 'redux';

import tileReducer from './tile/reducer';
import playerReducer from './player/reducer';

const rootReducer = combineReducers({
  tileReducer,
  playerReducer,
});

export default rootReducer;
