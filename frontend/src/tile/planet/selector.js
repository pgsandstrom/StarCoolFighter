export const getPlanetsOnLocation = (state, x, y) => state.planetReducer.planets.filter(planet => planet.x === x && planet.y === y);
