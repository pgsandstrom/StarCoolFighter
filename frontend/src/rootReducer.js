import { combineReducers } from 'redux';

import tileReducer from './tile/reducer';
import planetReducer from './tile/planet/reducer';
import playerReducer from './player/reducer';

const rootReducer = combineReducers({
  tileReducer,
  planetReducer,
  playerReducer,
});

export default rootReducer;
