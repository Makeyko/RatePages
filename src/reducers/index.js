import { combineReducers } from 'redux'
import navigationReducer from './navigation'
import questionsReducer from './questions'

const pagerate = combineReducers({
  navigation: navigationReducer,
  questions: questionsReducer
})

export default pagerate