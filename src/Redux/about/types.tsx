/**
 * Actions Types
 */
export enum VideoTypes {
  FETCH_VIDEO = '@video/FETCH_VIDEO',
  GET_SUCCESS = '@video/GET_SUCCESS',
  GET_FAILURE = '@video/GET_FAILURE',
}

/**
 * Data Types
 */
export interface Video {
  id: number
  key: number
  name: string
}
export interface Details {
  id: number
  poster_path: string
  backdrop_path: string
  overview: string
  title: string
  name: string
  release_date: string
  vote_average: number
  runtime: number
  genres: Array<{ id: number, name: string }>
}

/**
 * State types
 */
export interface VideoState {
   readonly data: Video[]
   readonly details: Details | never
   readonly fetch: boolean
   readonly error: boolean
 }