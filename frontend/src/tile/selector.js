import _ from 'lodash';

const getTiles = (state) => {
  const tiles = Object.values(state.tileReducer.tiles).map(tileRow => Object.values(tileRow));
  return _.flatten(tiles);
};

// TODO jesus this is so ineffective... perhaps selector with large cache?
const getTile = (state, tileId) => getTiles(state).find(tile => tile.id === tileId);

const getFleets = (state) => {
  const fleets = getTiles(state).map(tile => tile.fleets.map(fleet => ({ ...fleet, x: tile.x, y: tile.y })));
  return _.flatten(fleets);
};

const getSelectedFleets = state =>
  Object.keys(state.tileReducer.selectedFleetsId)
    .filter(key => state.tileReducer.selectedFleetsId[key])
    .map(key => Number(key));

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
  // debugger;
  const selectedFleetsId = getSelectedFleets(state);
  if (selectedFleetsId.length === 0) {
    return false;
  }
  const fleets = getFleets(state);
  return fleets.every((fleet) => {
    if (selectedFleetsId.includes(fleet.id) === false) {
      return true;
    } else {
      const tile = getTile(state, tileId);
      // debugger;
      return canFleetReachTile(fleet, tile);
    }
  });
};
