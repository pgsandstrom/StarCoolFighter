import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'che',
  createHomeworld: (dispatch, x, y) => {
    dispatch(createPlanet(x, y, 'sin', 3, 0));
    dispatch(createPlanet(x, y, 'cos', 2, 0));
    dispatch(createPlanet(x, y, 'tan', 1, 2));
  },
};

export default race;
