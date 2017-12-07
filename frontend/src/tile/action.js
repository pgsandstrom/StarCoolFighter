import {
  CREATE_BOARD,
  SET_TILE,
  CREATE_FLEET,
  MOVE_FLEET,
  ADD_HISTORY, SELECT_HISTORY,
} from './reducer';
import {
  getSelectedFleets,
} from '../player/selector';
import { historyTypes } from './historyTypes';
import { newId, getNewItem } from '../util';

const defaultTile = {
  x: undefined,
  y: undefined,
};

const defaultFleet = {
  x: undefined,
  y: undefined,
};


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
