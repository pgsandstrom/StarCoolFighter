import { CREATE_BOARD, SET_TILE, SELECT_TILE } from './reducer';

export const createBoard = (size) => {
  const board = {};
  for (let outer = -size; outer <= size; outer++) {
    for (let inner = -size; inner <= size; inner++) {
      const combined = outer + inner;
      if (-size <= combined && combined <= size) {
        if (board[outer] == null) {
          board[outer] = {};
        }
        board[outer][inner] = {};
      }
    }
  }
  return { type: CREATE_BOARD, payload: board };
};

export const setTile = (x, y) => ({
  type: SET_TILE,
  payload: {
    x,
    y,
  },
});

export const selectTile = (x, y) => (dispatch, getState) => {
  // const selected = getState().tileReducer.tiles[x][y].selected === true;
  return dispatch({
    type: SELECT_TILE,
    payload: {
      x,
      y,
    },
  });
};
