import { Reducer } from 'redux'
import { FilmsState, FilmsTypes } from './types'

type Action = {
  type: string
  payload: {actions: string[], adventure: string[], animations: string[], war: string[]}
}

const INITIAL_STATE: FilmsState = {
  actions: [],
  animations: [],
  war: [],
  error: false,
  loading: false,
  adventure: []
}

const reducer: Reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
  case FilmsTypes.LOAD_REQUEST:
    return { ...state, loading: true }
  case FilmsTypes.LOAD_SUCCESS:
    return { ...state, loading: false, error: false, actions: action.payload.actions, adventure: action.payload.adventure, animations: action.payload.animations, war: action.payload.war }
  case FilmsTypes.LOAD_FAILURE:
    return { ...state, loading: false, error: true, actions: [], animations: [], war: [] }
  default:
    return state
  }
}

export default reducer