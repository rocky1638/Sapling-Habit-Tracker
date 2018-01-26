import { ADD_PRACTICE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PRACTICE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
