import _ from 'lodash';

let idGenerator = 1;

export const newId = () => idGenerator++;

export const getNewItem = item => ({ ..._.cloneDeep(item), id: newId() });
