import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const SEARCH_CONCERTS = 'SEARCH_CONCERTS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_CONCERT_TO_FAV = 'ADD_CONCERT_TO_FAV';

export function fetchConcerts(term) {
  const url = `${API_URL}concerts/search/${term}`;
  const request = axios.get(url);
  return {
    type: SEARCH_CONCERTS,
    payload: request
  };
}

export function loginUser(props) {
  const request = axios.post(`${API_URL}login`, props);
  return {
    type: LOGIN_USER,
    payload: request
  };
}
export function registerUser(props) {
  const request = axios.post(`${API_URL}/register`, props);
  return {
    type: LOGIN_USER,
    payload: request
  };
}
export function logoutUser(props) {
  const request = axios.delete(`${API_URL}logout`, props);
  return {
    type: LOGOUT_USER,
    payload: request
  };
}

export function addToFav(params) {
  const request = axios.post(`${API_URL}concerts/add`, params);
  console.log('Params que llegan al action: ', params);
  return {
    type: ADD_CONCERT_TO_FAV,
    payload: request
  };
}
