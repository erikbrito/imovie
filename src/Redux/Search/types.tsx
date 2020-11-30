/**
 * Actions Types
 */
export enum MovieTypes {
  FETCH_MOVIE = '@movie/FETCH_MOVIE',
  GET_SUCCESS = '@movie/GET_SUCCESS',
  GET_FAILURE = '@movie/GET_FAILURE',
}

/**
 * Data Types
 */
export interface Movie {
  id: number
  title: string
  poster_path: string
  overview: string
}

/**
 * State types
 */
 export interface MovieState {
   readonly data: Movie[]
   readonly fetch: boolean
   readonly error: boolean
 }