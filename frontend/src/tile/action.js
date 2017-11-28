import _ from 'lodash';

import { CREATE_BOARD, SET_TILE, SELECT_TILE, SELECT_FLEET, UNSELECT_FLEET } from './reducer';

let idGenerator = 1;
const newId = () => idGenerator++;

const defaultTile = {
  x: undefined,
  y: undefined,
  fleets: [],
};

const defaultFleet = {
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
        board[outer][inner] = getNewItem({ ...defaultTile, x: outer, y: inner });
        if ((outer === 1 && inner === 1) || (outer === -1 && inner === -1)) {
          board[outer][inner].fleets.push(getNewItem(defaultFleet));
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

export const selectFleet = id => ({
  type: SELECT_FLEET,
  payload: {
    id,
  },
});

export const unselectFleet = id => ({
  type: UNSELECT_FLEET,
  payload: {
    id,
  },
});
