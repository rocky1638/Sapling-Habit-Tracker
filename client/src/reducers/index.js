import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';
import practiceReducer from './reducer_practice';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  practices: practiceReducer
});

export default rootReducer;
