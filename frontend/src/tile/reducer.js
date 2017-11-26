import update from 'immutability-helper';

export const CREATE_BOARD = 'tile/CREATE_BOARD';
export const SET_TILE = 'tile/SET_TILE';
export const SELECT_TILE = 'tile/SELECT_TILE';

const initialState = {
  tiles: {},
  selectedTile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, tiles: action.payload };
    // case SET_TILE:
    //   return { ...state, tiles: [...state.tiles, ] };
    case SELECT_TILE:
      return { ...state, selectedTile: action.payload };
      // return update(state, {
      //   tiles: {
      //     [action.payload.x]: {
      //       [action.payload.y]: {
      //         selected: {
      //           $set: action.payload.selected } } } } });
    default:
      return state;
  }
};
