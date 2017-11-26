import _ from 'lodash';

import { CREATE_BOARD, SET_TILE, SELECT_TILE } from './reducer';

let idGenerator = 1;
const newId = () => idGenerator++;

const defaultTile = {
  fleet: [],
};

const getNewItem = item => ({ ..._.cloneDeep(item), id: newId() });

export const createBoard = (size) => {
  const board = {};
  for (let outer = -size; outer <= size; outer++) {
    for (let inner = -size; inner <= size; inner++) {
      const combined = outer + inner;
      if (-size <= combined && combined <= size) {
        if (board[outer] == null) {
          board[outer] = {};
        }
        board[outer][inner] = getNewItem(defaultTile);
        if (outer === 1 && inner === 1) {
          board[outer][inner].fleet.push({});
        }
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

export const selectTile = id => ({
  type: SELECT_TILE,
  payload: {
    id,
  },
});
