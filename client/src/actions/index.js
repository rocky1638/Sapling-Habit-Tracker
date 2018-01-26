import axios from 'axios';
import { FETCH_USER, ADD_PRACTICE, FETCH_PRACTICES } from './types';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};

export const addPractice = (values, callback) => dispatch => {
  axios.post('/api/add_practice', values).then(res => {
    callback();
    return dispatch({ type: ADD_PRACTICE, payload: res.data });
  });
};

export const fetchPractices = () => dispatch => {
  axios.get('/api/fetch_practices').then(res => {
    return dispatch({ type: FETCH_PRACTICES, payload: res.data });
  });
};
