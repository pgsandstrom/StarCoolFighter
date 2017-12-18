export const getFleetsOnLocation = (state, x, y) => state.tileReducer.fleets.filter(fleet => fleet.x === x && fleet.y === y);
