import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const SEARCH_CONCERTS_SUCCESS = 'SEARCH_CONCERTS';
export const SEARCH_CONCERTS_ERROR = 'SEARCH_CONCERTS_ERROR';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_CONCERT_TO_FAV = 'ADD_CONCERT_TO_FAV';
export const SET_SEARCHED_ARTIST = 'SET_SEARCHED_ARTIST';
export const ADD_ARTIST_TO_FAV = 'ADD_ARTIST_TO_FAV';
export const GET_USER_ARTISTS = 'GET_USER_ARTISTS';
export const GET_USER_FAVS = 'GET_USER_FAVS';
export const RECENT_CONCERTS = 'RECENT_CONCERTS';

// HANDLE USER SESSIONS
export function loginUser(props) {
  const request = axios.post(`${API_URL}login`, props);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error.response });
    });
  };
}

export function registerUser(props) {
  const request = axios.post(`${API_URL}/register`, props);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response });
    });
  };
}

export function logoutUser(props) {
  const request = axios.delete(`${API_URL}logout`, props);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: LOGOUT_USER, payload: result.data });
    });
  };
}

// HANDLE CONCERTS
export function fetchConcerts(term) {
  const url = `${API_URL}concerts/search/${term}`;
  const request = axios.get(url);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: SEARCH_CONCERTS_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: SEARCH_CONCERTS_ERROR, payload: error.response });
    });
  };
}

export function fetchLastConcerts() {
  const request = axios.get(`${API_URL}concerts/last`);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: RECENT_CONCERTS, payload: result.data });
    });
  };
}

export function fetchFavs(token) {
  const request = axios.get(`${API_URL}concerts/${token}`);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: SEARCH_CONCERTS_SUCCESS, payload: result.data });
    });
  };
}

export function fetchUserArtist(token) {
  const request = axios.get(`${API_URL}artist/${token}`);
  return {
    type: GET_USER_ARTISTS,
    payload: request
  };
}



// Handle favs
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

