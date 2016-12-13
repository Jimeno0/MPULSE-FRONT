import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

export const SEARCH_CONCERTS_SUCCESS = 'SEARCH_CONCERTS';
export const SEARCH_CONCERTS_ERROR = 'SEARCH_CONCERTS_ERROR';

export const RECENT_CONCERTS_SUCCESS = 'RECENT_CONCERTS_SUCCESS';
export const RECENT_CONCERTS_ERROR = 'RECENT_CONCERTS_ERROR';

export const FAV_CONCERTS_SUCCESS = 'FAV_CONCERTS_SUCCESS';
export const FAV_CONCERTS_ERROR = 'FAV_CONCERTS_ERROR';

export const GET_USER_ARTISTS_SUCCESS = 'GET_USER_ARTISTS_SUCCESS';
export const GET_USER_ARTISTS_ERROR = 'GET_USER_ARTISTS_ERROR';

export const ADD_CONCERT_TO_FAV_ERROR = 'ADD_CONCERT_TO_FAV_ERROR';
export const ADD_ARTIST_TO_FAV_ERROR = 'ADD_ARTIST_TO_FAV_ERROR';
// SIN REDUCER
export const ADD_CONCERT_TO_FAV_SUCCESS = 'ADD_CONCERT_TO_FAV_SUCCESS';
export const REMOVE_FROM_FAV_SUCCESS = 'REMOVE_FROM_FAV_SUCCESS';
export const ADD_ARTIST_TO_FAV_SUCCESS = 'ADD_ARTIST_TO_FAV_SUCCESS';


export const SET_SEARCHED_ARTIST = 'SET_SEARCHED_ARTIST';

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
      dispatch({ type: RECENT_CONCERTS_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: RECENT_CONCERTS_ERROR, payload: error.response });
    });
  };
}

export function fetchFavs(token) {
  const request = axios.get(`${API_URL}concerts/${token}`);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: FAV_CONCERTS_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: FAV_CONCERTS_ERROR, payload: error.response });
    });
  };
}

export function fetchUserArtist(token) {
  const request = axios.get(`${API_URL}artist/${token}`);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: GET_USER_ARTISTS_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: GET_USER_ARTISTS_ERROR, payload: error.response });
    });
  };
}

// Handle favs
export function addToFav(params) {
  const request = axios.post(`${API_URL}concerts/add`, params);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: ADD_CONCERT_TO_FAV_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: ADD_CONCERT_TO_FAV_ERROR, payload: error.response });
    });
  };
}

export function removeFromFav(params) {
  const { token, concertId } = params;
  const request = axios.delete(`${API_URL}concerts/${token}/${concertId}`);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: REMOVE_FROM_FAV_SUCCESS, payload: result.data });
    });
  };
}

export function addArtistToFav(params) {
  const request = axios.post(`${API_URL}artist`, params);
  return (dispatch) => {
    request.then(result => {
      dispatch({ type: ADD_ARTIST_TO_FAV_SUCCESS, payload: result.data });
    }).catch(error => {
      dispatch({ type: ADD_ARTIST_TO_FAV_ERROR, payload: error.response });
    });
  };
}

// FALTA REMOVER ARTISTAS Y USER favs

export function setSearchedArtist(term) {
  return {
    type: SET_SEARCHED_ARTIST,
    payload: term
  };
}
