import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';
import practiceReducer from './reducer_practice';
import specificPracticeReducer from './reducer_specific_practice';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  practices: practiceReducer,
  currentPractice: specificPracticeReducer
});

export default rootReducer;
