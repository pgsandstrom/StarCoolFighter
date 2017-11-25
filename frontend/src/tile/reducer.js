export const CREATE_BOARD = 'tile/CREATE_BOARD';
export const SET_TILE = 'tile/SET_TILE';

const initialState = {
  tiles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state, tiles: action.payload };
    case SET_TILE:
      return { ...state, tiles: [...state.tiles, ] };
    default:
      return state;
  }
};
