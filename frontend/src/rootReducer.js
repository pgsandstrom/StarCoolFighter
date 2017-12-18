import { combineReducers } from 'redux';

import gameReducer from './game/reducer';
import tileReducer from './tile/reducer';
import personalReducer from './personal/reducer';
import planetReducer from './tile/planet/reducer';
import playerReducer from './player/reducer';

const rootReducer = combineReducers({
  gameReducer,
  tileReducer,
  personalReducer,
  planetReducer,
  playerReducer,
});

export default rootReducer;
