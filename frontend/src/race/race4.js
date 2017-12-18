import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'maj son',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'efo', 4, 4, playerId));
  },
};

export default race;
