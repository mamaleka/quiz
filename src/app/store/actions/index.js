export const ACTIONS={
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_NUMBER: 'SET_NUMBER',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    SET_QUESTION_TYPE: 'SET_TYPE'
}

export const setCategories = (categories)=>{
    return {
        type: ACTIONS.SET_CATEGORIES,
        categories
    }
}

export const setCategory = (category)=>{
    return {
        type: ACTIONS.SET_CATEGORY,
        category
    }
}


export const setNumber = (number) => {
    console.log(number)
    return {
        type: ACTIONS.SET_NUMBER, number
    }
}

export const setDifficulty = difficulty => {
    return {type:ACTIONS.SET_DIFFICULTY, difficulty}
}

export const setQuestionType = questionType => {
    return {type: ACTIONS.SET_QUESTION_TYPE, questionType}
}