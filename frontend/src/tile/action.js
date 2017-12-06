import _ from 'lodash';

import { CREATE_BOARD, SET_TILE, SELECT_TILE, SELECT_FLEET, UNSELECT_FLEET, CREATE_FLEET, MOVE_FLEET } from './reducer';
import { getTile, getSelectedFleets, isAnyFleetSelected } from './selector';

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

export const createBoard = size => (dispatch) => {
  const tiles = [];
  for (let outer = -size; outer <= size; outer++) {
    for (let inner = -size; inner <= size; inner++) {
      const combined = outer + inner;
      if (-size <= combined && combined <= size) {
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

export const selectTile = id => (dispatch, getState) => {
  dispatch({
    type: SELECT_TILE,
    payload: {
      id,
    },
  });
  // TODO make moving work correctly
  // TODO also save the transitions in the state so they can be watched later
  if (isAnyFleetSelected(getState())) {
    const tile = getTile(getState(), id);
    dispatch(moveFleet(tile.x, tile.y));
  }
};

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

export const moveFleet = (x, y) => (dispatch, getState) => {
  const selectedFleetIds = getSelectedFleets(getState()).map(fleet => fleet.id);
  dispatch({
    type: MOVE_FLEET,
    payload: {
      fleetIds: selectedFleetIds,
      to: { x, y },
    },
  });
};
