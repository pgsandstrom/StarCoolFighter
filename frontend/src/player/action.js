import {
  SELECT_TILE,
  SELECT_FLEET,
  UNSELECT_FLEET,
} from './reducer';
import {
  isAnyFleetSelected,
} from './selector';
import { getTile } from '../tile/selector';
import { moveFleet } from '../tile/action';


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

