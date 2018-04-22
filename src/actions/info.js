import { TOGGLE_INFO, CLOSE_INFO } from './types';

export const toggleInfo = () => dispatch => {
  console.log('action info');
  dispatch({ type: TOGGLE_INFO });
};

export const closeInfo = () => dispatch => {
  dispatch({ type: CLOSE_INFO });
};
