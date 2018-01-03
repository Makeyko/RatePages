import {NEXT_PAGE, PREVIOUS_PAGE, SET_RATE} from '../constants';

export function nextPage() {
  return { type: NEXT_PAGE }
}

export function previusPage() {
  return { type: PREVIOUS_PAGE }
}

export function setRate(index, n) {
  return { type: SET_RATE, index, n }
}