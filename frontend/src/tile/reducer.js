import update from 'immutability-helper';

export const CREATE_BOARD = 'tile/CREATE_BOARD';
export const SELECT_TILE = 'tile/SELECT_TILE';
export const SELECT_FLEET = 'tile/SELECT_FLEET';
export const UNSELECT_FLEET = 'tile/UNSELECT_FLEET';
export const CREATE_FLEET = 'tile/CREATE_FLEET';
export const MOVE_FLEET = 'tile/MOVE_FLEET';
export const ADD_HISTORY = 'tile/ADD_HISTORY';

const initialState = {
  tiles: [],
  selectedTileId: null,
  fleets: [],
  selectedFleetsId: {},
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, tiles: action.payload };
    case SELECT_TILE:
      return { ...state, selectedTileId: action.payload.id };
    case SELECT_FLEET:
      return update(state, {
        selectedFleetsId: {
          [action.payload.id]: {
            $set: true,
          },
        },
      });
    case UNSELECT_FLEET:
      return update(state, {
        selectedFleetsId: {
          [action.payload.id]: {
            $set: false,
          },
        },
      });
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
    default:
      return state;
  }
};
