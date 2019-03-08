import { ADD } from './actions';

// the root reduer
const initialState = {
  products: []
};

export function rootReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case ADD:
      newState.products = [action.product, ...newState.products];
    default:
      break;
  }
  return newState;
}
