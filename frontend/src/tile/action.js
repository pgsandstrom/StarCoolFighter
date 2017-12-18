import _ from 'lodash';

import {
  CREATE_BOARD,
  CREATE_FLEET,
  MOVE_FLEET,
  ADD_HISTORY, SELECT_HISTORY,
} from './reducer';
import {
  getSelectedFleets, isAnyFleetSelected,
} from '../personal/selector';
import { historyTypes } from './historyTypes';
import { newId, getNewItem, getRandomInt } from '../util';
import { createRandomPlanet } from './planet/action';
import { getTile, isStartPosition } from './selector';

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
        if (isStartPosition(outer, inner) === false) {
          _.times(getRandomInt(0, 3), () => dispatch(createRandomPlanet(outer, inner)));
        }
      }
    }
  }
  dispatch({ type: CREATE_BOARD, payload: tiles });
};

export const addFleet = (x, y, playerId) => ({
  type: CREATE_FLEET,
  payload: {
    fleet: getNewItem({ ...defaultFleet, x, y, playerId }),
  },
});

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

export const moveFleet = tileId => (dispatch, getState) => {
  if (isAnyFleetSelected(getState()) === false) {
    return;
  }

  const tile = getTile(getState(), tileId);
  const beforeState = getState();
  const selectedFleetIds = getSelectedFleets(beforeState).map(fleet => fleet.id);
  const moveAction = dispatch({
    type: MOVE_FLEET,
    payload: {
      fleetIds: selectedFleetIds,
      to: { x: tile.x, y: tile.y },
    },
  });
  dispatch(addHistory(historyTypes.MOVE, beforeState.tileReducer, moveAction));
};
