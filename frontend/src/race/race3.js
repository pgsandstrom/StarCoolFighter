import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'jol bar',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'jol', 2, 1));
    dispatch(createPlanet(x, y, 'bar', 1, 2));
  },
};

export default race;
