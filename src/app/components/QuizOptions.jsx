import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import apiService from '../services/api-service'
import {setCategories, setCategory, setDifficulty, setNumber, setQuestionType} from '../store/actions'

export const QuizOptions = ()=>{
    // const [categories, setCategories] = useState([])
    const categories = useSelector(state => state.categories)
    const category = useSelector(state => state.category)
    const number = useSelector(state => state.number)
    const difficulty = useSelector(state => state.difficulty)
    const questionType = useSelector(state => state.questionType)
    const dispatch = useDispatch();

    useEffect(() => {
      apiService.getCategories().then(categories =>
        dispatch(setCategories(categories)))
    }, [dispatch])

    const handleCategoryChange = (event)=>{
        dispatch(setCategory(event.target.value))
    }
    const handleNumberChange = (event)=>{
        dispatch(setNumber(event.target.value))
    }
    const handleDifficultyChange = (event)=>{
        dispatch(setDifficulty(event.target.value))
    }
    const handleQuestionTypeChange = (event)=>{
        dispatch(setQuestionType(event.target.value))
    }

    return (
        <form className='quiz-options-form'>
            <div className="quiz-options-form-body">
                
            

                <label htmlFor="categories">Category</label>
                <select name='categories' id='categories' value={category} onChange={handleCategoryChange} >
                    {
                        categories.map( category =>
                            <option key={category.id} value={category.id} >{category.name}</option>)
                    }
                </select>
                <label htmlFor="number">Number</label>
                <select name='number' id='number' value={number} onChange={handleNumberChange} >
                    {
                        [5, 10, 20, 25].map( num =>
                            <option key={num} value={num} >{num}</option>)
                    }
                </select>
                <label htmlFor="difficulty">Difficulty</label>
                <select name='difficulty' id='difficulty' value={difficulty} onChange={handleDifficultyChange} >
                    {
                        ['easy', 'hard'].map( dif =>
                            <option key={dif} value={dif} >{dif}</option>)
                    }
                </select>
                <label htmlFor="questionType">Question Type</label>
                <select name='questionType' id='questionType' value={questionType} onChange={handleQuestionTypeChange} >
                    {
                        ['true or false', 'multiple choice'].map( t =>
                            <option key={t} value={t} >{t}</option>)
                    }
                </select>
            </div>
            <button type="submit">Go</button>
        </form>
    )
}