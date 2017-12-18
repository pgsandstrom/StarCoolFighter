import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'jol bar',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'jol', 2, 1, playerId));
    dispatch(createPlanet(x, y, 'bar', 1, 2, playerId));
  },
};

export default race;
