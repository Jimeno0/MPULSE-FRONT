import axios from 'axios';

const API_KEY = 'VIxfWLncF71QZ3aoc9OLoeGU9NnAsVRj';
const API_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
export const FETCH_CONCERTS = 'FETCH_CONCERTS';


export function fetchConcerts(term){
  const url = `${API_URL}apikey=${API_KEY}&keyword=${term}`
  const request = axios.get(url);

  return {
    type: FETCH_CONCERTS,
    payload: request
  }
}