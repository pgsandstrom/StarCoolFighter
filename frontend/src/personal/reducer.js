import update from 'immutability-helper';

export const SELECT_TILE = 'personal/SELECT_TILE';
export const UNSELECT_TILE = 'personal/UNSELECT_TILE';
export const SELECT_FLEET = 'personal/SELECT_FLEET';
export const UNSELECT_FLEET = 'personal/UNSELECT_FLEET';
export const UNSELECT_ALL_FLEETS = 'personal/UNSELECT_ALL_FLEETS';
export const SELECT_PLANET = 'personal/SELECT_PLANET';
export const UNSELECT_PLANET = 'personal/UNSELECT_PLANET';

const initialState = {
  selectedTileId: null,
  selectedFleetsId: {},
  selectedPlanetId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TILE:
      return { ...state, selectedTileId: action.payload.id };
    case UNSELECT_TILE:
      return { ...state, selectedTileId: null };
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
    case UNSELECT_ALL_FLEETS:
      return { ...state, selectedFleetsId: {} };
    case SELECT_PLANET:
      return { ...state, selectedPlanetId: action.payload.id };
    case UNSELECT_PLANET:
      return { ...state, selectedPlanetId: null };
    default:
      return state;
  }
};
