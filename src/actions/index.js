import axios from 'axios';
const API_URL = 'http://localhost:3000/'

export const SEARCH_CONCERTS = 'SEARCH_CONCERTS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export function fetchConcerts(term){
  console.log('term', term);
  const url = `${API_URL}concerts/search/${term}`
  const request = axios.get(url);
  return {
    type: SEARCH_CONCERTS,
    payload: request
  }
}

export function loginUser(props) {
  const request = axios.post(`${API_URL}/login`, props);
  return{
    type: LOGIN_USER,
    payload: request
  }
}
export function registerUser(props) {
  const request = axios.post(`${API_URL}/register`, props);
  return{
    type: REGISTER_USER,
    payload: request
  }
}
