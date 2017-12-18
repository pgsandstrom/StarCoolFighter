import update from 'immutability-helper';
import { startPositions, playerColors } from '../tile/selector';

export const RESET_AVAILABLE_RACES = 'tile/RESET_AVAILABLE_RACES';
export const REMOVE_AVAILABLE_RACE = 'tile/REMOVE_AVAILABLE_RACE';
export const RESET_AVAILABLE_START_POSITIONS = 'tile/RESET_AVAILABLE_START_POSITIONS';
export const REMOVE_AVAILABLE_START_POSITION = 'tile/REMOVE_AVAILABLE_START_POSITION';
export const RESET_AVAILABLE_COLORS = 'tile/RESET_AVAILABLE_COLORS';
export const REMOVE_AVAILABLE_COLOR = 'tile/REMOVE_AVAILABLE_COLOR';

const initialState = {
  availableRaces: [],
  availableStartPositions: startPositions,
  availableColors: playerColors,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_AVAILABLE_RACES:
      // TODO just use the constants?
      return { ...state, availableRaces: action.payload.races };
    case REMOVE_AVAILABLE_RACE:
      return update(state, {
        availableRaces: { $splice: [[action.payload.index, 1]] },
      });
    case RESET_AVAILABLE_START_POSITIONS:
      return { ...state, availableStartPositions: startPositions };
    case REMOVE_AVAILABLE_START_POSITION:
      return {
        ...state,
        availableStartPositions: state.availableStartPositions.filter(
          startPosition => !(startPosition.x === action.payload.x && startPosition.y === action.payload.y),
        ),
      };
    case RESET_AVAILABLE_COLORS:
      return { ...state, availableColors: playerColors };
    case REMOVE_AVAILABLE_COLOR:
      return {
        ...state,
        availableColors: state.availableColors.filter(
          color => color !== action.payload.color,
        ),
      };
    default:
      return state;
  }
};
