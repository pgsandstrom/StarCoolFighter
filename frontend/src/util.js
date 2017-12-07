import _ from 'lodash';

let idGenerator = 1;

export const newId = () => idGenerator++;

export const getNewItem = item => ({ ..._.cloneDeep(item), id: newId() });

export const getRandomInt = (min, max) => // inclusive u know
  Math.floor(Math.random() * (max - min + 1)) + min;

