import { combineReducers } from 'redux';

import gameReducer from './game/reducer';
import tileReducer from './tile/reducer';
import planetReducer from './tile/planet/reducer';
import playerReducer from './personal/reducer';

const rootReducer = combineReducers({
  gameReducer,
  tileReducer,
  planetReducer,
  playerReducer,
});

export default rootReducer;
