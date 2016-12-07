import axios from 'axios';
const API_URL = 'http://localhost:3000/'
export const SEARCH_CONCERTS = 'SEARCH_CONCERTS';

export function fetchConcerts(term){
  console.log('term', term);
  const url = `${API_URL}concerts/search/${term}`
  const request = axios.get(url);
  return {
    type: SEARCH_CONCERTS,
    payload: request
  }
}
