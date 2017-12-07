import update from 'immutability-helper';

export const SELECT_TILE = 'tile/SELECT_TILE';
export const SELECT_FLEET = 'tile/SELECT_FLEET';
export const UNSELECT_FLEET = 'tile/UNSELECT_FLEET';

const initialState = {
  selectedTileId: null,
  selectedFleetsId: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
