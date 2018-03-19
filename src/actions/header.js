import { TOGGLE_NAV, CLOSE_NAV } from './types';

export const toggleNav = () => dispatch => {
  console.log('toggleNav');
  dispatch({ type: TOGGLE_NAV });
};

export const closeNav = () => {
  return {
    type: CLOSE_NAV
  };
};
