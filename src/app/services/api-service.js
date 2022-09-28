import axios from 'axios'

const  ENDPOINTS = {
    quiz: 'api.php',
    token: 'api_token.php',
    categories: 'api_category.php',
    countLookup: 'api_count.php'
}
export class ApiService{
    constructor (baseUrl, endpoints = ENDPOINTS ){
        this.baseUrl = baseUrl
        this.endpoints = endpoints
    }

    getCategories =  ()=>{
        const url = this.baseUrl+this.endpoints.categories
        return axios.get(url).then(result=>result.data.trivia_categories)
    }
}

export default new ApiService('https://opentdb.com/')