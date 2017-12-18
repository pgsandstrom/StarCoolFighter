import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'maj son',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'efo', 4, 4));
  },
};

export default race;
