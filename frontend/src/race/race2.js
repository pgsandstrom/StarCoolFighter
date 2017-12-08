import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'ei',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'a', 2, 1));
    dispatch(createPlanet(x, y, 'b', 1, 2));
    dispatch(createPlanet(x, y, 'c', 1, 0));
  },
};

export default race;
