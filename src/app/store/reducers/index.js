import { ACTIONS } from '../actions'

const initialState = {
    categories: [],
    category: '',
    number: 5,
    difficulty: 'easy',
    questionType: 'any'
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_CATEGORIES:
            return {...state, categories: action.categories}
        case ACTIONS.SET_CATEGORY:
            return {...state, category: action.category}
        case ACTIONS.SET_DIFFICULTY:
            return {...state, difficulty: action.difficulty}
        case ACTIONS.SET_NUMBER:
            return {...state, number: action.number}
        case ACTIONS.SET_QUESTION_TYPE:
            return {...state, questionType: action.questionType}
        default:
            return state
    }
}