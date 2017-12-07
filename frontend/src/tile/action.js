import _ from 'lodash';

import {
  CREATE_BOARD,
  SET_TILE,
  SELECT_TILE,
  SELECT_FLEET,
  UNSELECT_FLEET,
  CREATE_FLEET,
  MOVE_FLEET,
  ADD_HISTORY, SELECT_HISTORY,
} from './reducer';
import {
  getTile,
  getSelectedFleets,
  isAnyFleetSelected,
} from './selector';
import { historyTypes } from './historyTypes';

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

export const createBoard = size => (dispatch, getState) => {
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

  dispatch({ type: CREATE_BOARD, payload: tiles });

  dispatch(addHistory(historyTypes.INIT));
};

export const addHistory = (type, tileReducerParam, action = null) => (dispatch, getState) => {
  let tileReducer;
  if (tileReducerParam != null) {
    tileReducer = tileReducerParam;
  } else {
    tileReducer = getState().tileReducer;
  }

  dispatch({
    type: ADD_HISTORY,
    payload: {
      id: newId(),
      type,
      tileReducer,
      selected: false,
      action,
    },
  });
};

export const selectHistory = id => ({
  type: SELECT_HISTORY,
  payload: {
    id,
  },
});

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
  const beforeState = getState();
  const selectedFleetIds = getSelectedFleets(beforeState).map(fleet => fleet.id);
  const moveAction = dispatch({
    type: MOVE_FLEET,
    payload: {
      fleetIds: selectedFleetIds,
      to: { x, y },
    },
  });
  dispatch(addHistory(historyTypes.MOVE, beforeState.tileReducer, moveAction));
};
