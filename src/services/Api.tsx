import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_TOKEN_AUTH}`
  }
})

export default Api