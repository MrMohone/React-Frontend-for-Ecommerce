import axios from 'axios'

//to access the backend api static files like images
export const BASE_URL = 'http://127.0.0.1:8000'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000' //Django backend base url
})

export default api