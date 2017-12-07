import { getNewItem, getRandomInt } from '../../util';

import { CREATE_PLANET, ATTACK_PLANET } from './reducer';

const defaultPlanet = {
  x: undefined,
  y: undefined,
  name: 'Roflcopter',
  resource: 3,
  influence: 3,
};

export const createRandomPlanet = (x, y) => {
  const resource = getRandomInt(0, 5);
  const influence = getRandomInt(0, 5);
  return createPlanet(x, y, undefined, resource, influence);
};

const createPlanet = (x, y, name, resource, influence) => {
  const newPlanet = getNewItem({ ...defaultPlanet, x, y, name, resource, influence });
  return {
    type: CREATE_PLANET,
    payload: {
      planet: newPlanet,
    },
  };
};

export const attackPlanet = () => {

};
