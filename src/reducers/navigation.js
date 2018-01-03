import {NEXT_PAGE, PREVIOUS_PAGE,QUESTIONS_TEXTS_ARRAY} from '../constants';

let initialState = {
    currentPage: 0,
    totalPages: QUESTIONS_TEXTS_ARRAY.length,
}


export default (state = initialState, action) => {
    
    switch (action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1 >= state.totalPages ? 0 : state.currentPage + 1,
            }
        case PREVIOUS_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1 < 0 ?  state.totalPages - 1 : state.currentPage - 1,
            }
        default:
            return state;
    }
}