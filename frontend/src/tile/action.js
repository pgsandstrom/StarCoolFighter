import _ from 'lodash';

import { CREATE_BOARD, SET_TILE, SELECT_TILE, SELECT_FLEET, UNSELECT_FLEET, CREATE_FLEET } from './reducer';

let idGenerator = 1;
const newId = () => idGenerator++;

const defaultTile = {
  x: undefined,
  y: undefined,
};

const defaultFleet = {
  x: undefined,
  y: undefined,
};

const getNewItem = item => ({ ..._.cloneDeep(item), id: newId() });

export const createBoard = (size) => (dispatch, getState) => {
  const tiles = [];
  for (let outer = -size; outer <= size; outer++) {
    for (let inner = -size; inner <= size; inner++) {
      const combined = outer + inner;
      if (-size <= combined && combined <= size) {
        if (tiles[outer] == null) {
          tiles[outer] = {};
        }
        tiles.push(getNewItem({ ...defaultTile, x: outer, y: inner }));
      }
    }
  }

  dispatch({
    type: CREATE_FLEET,
    payload: {
      fleet: getNewItem({ ...defaultFleet, x: 1, y: 1 }),
    },
  });

  return dispatch({ type: CREATE_BOARD, payload: tiles });
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
