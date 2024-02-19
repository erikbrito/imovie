import { Reducer } from 'redux'
import { VideoState, VideoTypes } from './types'

type Action = {
  type: string
  payload: {
    data: [],
    details: {
      id: 0,
      overview: '',
      title: '',
      name: '',
      genres: []
    }
  }
}


const INITIAL_STATE: VideoState = {
  data: [],
  details: {
    id: 0,
    overview: '',
    title: '',
    name: '',
    genres: [],
    poster_path: '',
    release_date: '',
    vote_average: 0,
    runtime: 0,
    backdrop_path: ''
  },
  error: false,
  fetch: false
}

const reducer: Reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
  case VideoTypes.GET_SUCCESS:
    return { ...state,  error: false, data: action.payload.data, details: action.payload.details }
  case VideoTypes.GET_FAILURE:
    return { ...state, error: true, data: [], details: {} }
  default:
    return state
  }
}
      
export default reducer