import { ADD_PRACTICE, FETCH_PRACTICES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PRACTICE:
      return [action.payload, ...state];
    case FETCH_PRACTICES:
      return action.payload;
    default:
      return state;
  }
}
