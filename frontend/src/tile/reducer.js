import update from 'immutability-helper';

export const RESET_AVAILABLE_RACES = 'tile/RESET_AVAILABLE_RACES';
export const REMOVE_AVAILABLE_RACE = 'tile/REMOVE_AVAILABLE_RACE';
export const CREATE_BOARD = 'tile/CREATE_BOARD';
export const CREATE_FLEET = 'tile/CREATE_FLEET';
export const MOVE_FLEET = 'tile/MOVE_FLEET';
export const ADD_HISTORY = 'tile/ADD_HISTORY';
export const SELECT_HISTORY = 'tile/SELECT_HISTORY';

const initialState = {
  availableRaces: [],
  tiles: [],
  fleets: [],
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_AVAILABLE_RACES:
      return { ...state, availableRaces: action.payload.races };
    case REMOVE_AVAILABLE_RACE:
      return update(
        state,
        { availableRaces:
          { $splice: [[action.payload.index, 1]] } },
      );
    case CREATE_BOARD:
      return { ...state, tiles: action.payload };
    case CREATE_FLEET:
      return { ...state, fleets: [...state.fleets, action.payload.fleet] };
    case MOVE_FLEET:
      return { ...state,
        fleets: state.fleets.map((fleet) => {
          if (action.payload.fleetIds.includes(fleet.id)) {
            return { ...fleet, x: action.payload.to.x, y: action.payload.to.y };
          } else {
            return fleet;
          }
        }) };
    case ADD_HISTORY: {
      return { ...state, history: [...state.history, action.payload] };
    }
    case SELECT_HISTORY: {
      return { ...state, history: state.history.map(item => ({ ...item, selected: item.id === action.payload.id })) };
    }
    default:
      return state;
  }
};
