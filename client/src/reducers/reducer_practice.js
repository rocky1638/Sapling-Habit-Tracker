import { ADD_PRACTICE, FETCH_PRACTICES, ADD_LOG } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_PRACTICE:
      return [action.payload, ...state];
    case FETCH_PRACTICES:
      return action.payload;
    case ADD_LOG: // add log also returns the list of practices
      return action.payload;
    default:
      return state;
  }
}
