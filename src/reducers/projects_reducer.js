import { TOGGLE_INFO, CLOSE_INFO } from '../actions/types';

const initialState = {
  open: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_INFO:
      return Object.assign(...state, { open: !state.open });
    case CLOSE_INFO:
      return Object.assign(...state, { open: false });
    default:
      return state;
  }
}
