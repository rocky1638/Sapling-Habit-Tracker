import { UPDATE_TIME } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return action.payload;
    default:
      return state;
  }
}
