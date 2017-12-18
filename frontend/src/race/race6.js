import { createPlanet } from '../tile/planet/action';

const race = {
  name: 'che',
  createHomeworld: (dispatch, x, y, playerId) => {
    dispatch(createPlanet(x, y, 'sin', 3, 0, playerId));
    dispatch(createPlanet(x, y, 'cos', 2, 0, playerId));
    dispatch(createPlanet(x, y, 'tan', 1, 2, playerId));
  },
};

export default race;
