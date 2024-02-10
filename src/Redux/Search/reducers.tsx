import { Reducer } from 'redux'
import { MovieState, MovieTypes } from './types'

type Action = {
  type: string
  payload: { data: string[] }
}

const INITIAL_STATE: MovieState = {
  data: [],
  error: false,
  fetch: false
}

const reducer: Reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
  case MovieTypes.GET_SUCCESS:
    return { ...state,  error: false, data: action.payload.data }
  case MovieTypes.GET_FAILURE:
    return { ...state, error: true, data: [] }
  default:
    return state
  }
}

export default reducer