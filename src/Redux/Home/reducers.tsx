import { Reducer } from 'redux'
import { FilmsState, FilmsTypes } from './types'

type Action = {
  type: string
  payload: {actions: string[], adventure: string[], animations: string[], war: string[], loading: boolean}
}

const INITIAL_STATE: FilmsState = {
  actions: [],
  adventure: [],
  animations: [],
  war: [],
  loading: false,
}

const reducer: Reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
  case FilmsTypes.LOAD_REQUEST:
    return { ...state, loading: false }
  case FilmsTypes.LOAD_SUCCESS:
    return { ...state, loading: true, actions: action.payload.actions, adventure: action.payload.adventure, animations: action.payload.animations, war: action.payload.war }
  case FilmsTypes.LOAD_FAILURE:
    return { ...state, loading: false, actions: [], animations: [], war: [] }
  default:
    return state
  }
}

export default reducer