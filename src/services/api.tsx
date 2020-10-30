import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover',
  headers: {
    'content-type': 'application/json'
  }
})

export default api
