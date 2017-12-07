import _ from 'lodash';

const getTiles = state => state.tileReducer.tiles;

export const getRelevantTiles = state => getRelevantTileReducer(state).tiles;

// TODO jesus this is so ineffective... perhaps selector with large cache?
export const getTile = (state, tileId) => getTiles(state).find(tile => tile.id === tileId);

export const getFleets = state => state.tileReducer.fleets;

export const getSelectedFleets = state =>
  Object.keys(state.tileReducer.selectedFleetsId)
    .filter(key => state.tileReducer.selectedFleetsId[key])
    .map(key => state.tileReducer.fleets.find(fleet => fleet.id === Number(key)));

export const isAnyFleetSelected = state =>
  Object.keys(state.tileReducer.selectedFleetsId)
    .some(key => state.tileReducer.selectedFleetsId[key]);

export const getRelevantFleetsForTile = (state, tile) => getRelevantTileReducer(state).fleets.filter(fleet => fleet.x === tile.x && fleet.y === tile.y);

const canFleetReachTile = (fleet, tile) => {
  const xDiff = fleet.x - tile.x;
  const yDiff = fleet.y - tile.y;

  const xCost = xDiff;
  let yCost;
  if (xDiff > 0 && yDiff < 0) {
    yCost = Math.min(0, yDiff + xDiff);
  } else if (xDiff < 0 && yDiff > 0) {
    yCost = Math.max(0, yDiff + xDiff);
  } else {
    yCost = yDiff;
  }
  return Math.abs(xCost) + Math.abs(yCost) <= 2;
};

export const isTileReachable = (state, tileId) => {
  const selectedFleetsId = getSelectedFleets(state);
  const tile = getTile(state, tileId);
  if (selectedFleetsId.length === 0) {
    return false;
  }

  return selectedFleetsId.every(selectedFleet => canFleetReachTile(selectedFleet, tile));
};

const getRelevantTileReducer = (state) => {
  const selectedHistory = getSelectedHistory(state);
  if (selectedHistory != null) {
    return selectedHistory.tileReducer;
  } else {
    return state.tileReducer;
  }
};

const getSelectedHistory = state => state.tileReducer.history.find(historyItem => historyItem.selected);
