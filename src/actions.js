// set types
export const ADD = 'ADD';

// create actions
export const addProd = product => {
  return {
    type: ADD,
    product
  };
};
