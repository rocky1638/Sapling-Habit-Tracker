import axios from 'axios';
import {
  FETCH_USER,
  ADD_PRACTICE,
  FETCH_PRACTICES,
  ADD_LOG,
  FETCH_CATEGORY,
  UPDATE_TIME
} from './types';

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

export const fetchCategory = id => dispatch => {
  axios
    .get('/api/fetch_logs', {
      params: {
        id
      }
    })
    .then(res => {
      return dispatch({ type: FETCH_CATEGORY, payload: res.data });
    });
};

export const addLog = (values, id, callback) => dispatch => {
  values.id = id;
  axios.post('/api/add_log', values).then(res => {
    callback();
    return dispatch({ type: ADD_LOG, payload: res.data });
  });
};

export const updateTime = (time, callback) => dispatch => {
  callback();
  return dispatch({ type: UPDATE_TIME, payload: time });
};
