import { TOGGLE_NAV, CLOSE_NAV } from '../actions/types';

const initialState = {
  open: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign(...state, { open: !state.open });
    case CLOSE_NAV:
      return Object.assign(...state, { open: false });
    default:
      return state;
  }
}
