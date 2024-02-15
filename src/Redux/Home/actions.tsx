import { action } from 'typesafe-actions'
import { FilmsTypes, Genres } from './types'

export const loadRequest = () => action(FilmsTypes.LOAD_REQUEST)

export const loadSuccess = (
  [actions, adventure, animations, war]: Genres[]
) => action(FilmsTypes.LOAD_SUCCESS, { actions, adventure, animations, war })

export const loadFailure = () => action(FilmsTypes.LOAD_FAILURE)