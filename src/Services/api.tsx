import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_TOKEN_AUTH}`
  }
})

export default api