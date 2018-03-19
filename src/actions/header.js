import { TOGGLE_NAV, CLOSE_NAV } from './types';

export const toggleNav = () => dispatch => {
  dispatch({ type: TOGGLE_NAV });
};

export const closeNav = () => dispatch => {
  dispatch({ type: CLOSE_NAV });
};
