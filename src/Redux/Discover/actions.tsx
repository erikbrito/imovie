import { action } from 'typesafe-actions'
import { MovieTypes, Movie } from './types'

export const fetchMovie = (movie: unknown) => action(MovieTypes.FETCH_MOVIE, movie)

export const getSuccess = (data: Movie[]) => action(MovieTypes.GET_SUCCESS, { data })

export const getFailure = () => action(MovieTypes.GET_FAILURE)