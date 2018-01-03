import {SET_RATE, QUESTIONS_TEXTS_ARRAY} from '../constants'

export default (state = {questionsTexts: QUESTIONS_TEXTS_ARRAY, questionsRates:[]}, action) => {    
    switch (action.type) {
        case SET_RATE:
          let questions = state;
          questions[action.index] = action.n;
          return questions;
        default:
          return state
      }
}