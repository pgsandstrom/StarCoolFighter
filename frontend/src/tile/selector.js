import _ from 'lodash';

const getTiles = state => state.tileReducer.tiles;

// TODO jesus this is so ineffective... perhaps selector with large cache?
const getTile = (state, tileId) => getTiles(state).find(tile => tile.id === tileId);

const getFleets = state => state.tileReducer.fleets;

const getSelectedFleets = state =>
  Object.keys(state.tileReducer.selectedFleetsId)
    .filter(key => state.tileReducer.selectedFleetsId[key])
    .map(key => state.tileReducer.fleets.find(fleet => fleet.id === Number(key)));

export const getFleetsForTile = (state, tile) =>
  state.tileReducer.fleets.filter(fleet => fleet.x === tile.x && fleet.y === tile.y);

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
  // const fleets = getFleets(state);
  // return fleets.every((fleet) => {
  //   if (selectedFleetsId.includes(fleet.id) === false) {
  //     return true;
  //   } else {
  //     const tile = getTile(state, tileId);
  //     return canFleetReachTile(fleet, tile);
  //   }
  // });
};
