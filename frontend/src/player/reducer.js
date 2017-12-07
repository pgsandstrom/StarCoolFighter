import update from 'immutability-helper';

export const SELECT_TILE = 'player/SELECT_TILE';
export const SELECT_FLEET = 'player/SELECT_FLEET';
export const UNSELECT_FLEET = 'player/UNSELECT_FLEET';

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
