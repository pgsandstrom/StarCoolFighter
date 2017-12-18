import {
  SELECT_TILE,
  UNSELECT_TILE,
  SELECT_FLEET,
  UNSELECT_FLEET,
  SELECT_PLANET,
  UNSELECT_PLANET,
} from './reducer';

export const selectTile = id => (dispatch) => {
  dispatch({
    type: SELECT_TILE,
    payload: {
      id,
    },
  });
};

export const unselectTile = () => ({
  type: UNSELECT_TILE,
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

export const selectPlanet = id => (dispatch, getState) => {
  if (getState().personalReducer.selectedTileId != null) {
    dispatch(unselectTile());
  }
  dispatch({
    type: SELECT_PLANET,
    payload: {
      id,
    },
  });
};

export const unselectPlanet = () => ({
  type: UNSELECT_PLANET,
});
