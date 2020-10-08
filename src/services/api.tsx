import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover',
  headers: {
    'content-type': 'application/json'
  }
})

export default api

// https://api.themoviedb.org/3/movie/343611?api_key=0087505ff8561639dc9744342748aeed