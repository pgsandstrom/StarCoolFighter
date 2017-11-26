import update from 'immutability-helper';

export const CREATE_BOARD = 'tile/CREATE_BOARD';
export const SELECT_TILE = 'tile/SELECT_TILE';
export const SELECT_FLEET = 'tile/SELECT_FLEET';

const initialState = {
  tiles: {},
  selectedTileId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, tiles: action.payload };
    // case SET_TILE:
    //   return { ...state, tiles: [...state.tiles, ] };
    case SELECT_TILE:
      return { ...state, selectedTileId: action.payload.id };
      // return update(state, {
      //   tiles: {
      //     [action.payload.x]: {
      //       [action.payload.y]: {
      //         selected: {
      //           $set: action.payload.selected } } } } });
    case SELECT_FLEET:
    default:
      return state;
  }
};
