import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const SEARCH_CONCERTS_SUCCESS = 'SEARCH_CONCERTS';
export const SEARCH_CONCERTS_ERROR = 'SEARCH_CONCERTS_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_CONCERT_TO_FAV = 'ADD_CONCERT_TO_FAV';
export const SET_SEARCHED_ARTIST = 'SET_SEARCHED_ARTIST';
export const ADD_ARTIST_TO_FAV = 'ADD_ARTIST_TO_FAV';
export const GET_USER_ARTISTS = 'GET_USER_ARTISTS';
export const GET_USER_FAVS = 'GET_USER_FAVS';
export const RECENT_CONCERTS = 'RECENT_CONCERTS';

export function fetchConcerts(term) {
  return function (dispatch) {
    const url = `${API_URL}concerts/search/${term}`;
    const request = axios.get(url)
    .then(result => {
      dispatch({ type: SEARCH_CONCERTS_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: SEARCH_CONCERTS_ERROR, payload: error.response })
    });
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
  return {
    type: ADD_CONCERT_TO_FAV,
    payload: request
  };
}

export function setSearchedArtist(term) {
  return {
    type: SET_SEARCHED_ARTIST,
    payload: term
  };
}

export function addArtistToFav(params) {
  const request = axios.post(`${API_URL}artist`, params);
  return {
    type: ADD_ARTIST_TO_FAV,
    payload: request
  };
}
export function fetchUserArtist(token) {
  const request = axios.get(`${API_URL}artist/${token}`);
  return {
    type: GET_USER_ARTISTS,
    payload: request
  };
}

export function fetchFavs(token) {
  const request = axios.get(`${API_URL}concerts/${token}`);
  return {
    type: SEARCH_CONCERTS,
    payload: request
  };
}

export function fetchLastConcerts() {
  const request = axios.get(`${API_URL}concerts/last`);
  return {
    type: RECENT_CONCERTS,
    payload: request
  };
}
