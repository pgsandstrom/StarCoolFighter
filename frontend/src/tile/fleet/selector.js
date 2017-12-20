import { getPlayer } from '../../player/selector';

export const getFleetsOnLocation = (state, x, y) => state.tileReducer.fleets.filter(fleet => fleet.x === x && fleet.y === y);

export const getFleet = (state, fleetId) => state.tileReducer.fleets.find(fleet => fleet.id === fleetId);

export const getFleetSpeed = (state, fleetId) => {
  const fleet = getFleet(state, fleetId);
  const player = getPlayer(state, fleet.playerId);
  return player.fleet[fleet.type].speed;
};
