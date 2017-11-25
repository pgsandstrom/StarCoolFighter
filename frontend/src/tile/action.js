import { CREATE_BOARD, SET_TILE } from './reducer';

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
