/**
 * Actions Types
 */
export enum FilmsTypes {
  LOAD_REQUEST = '@films/LOAD_REQUEST',
  LOAD_SUCCESS = '@films/LOAD_SUCCESS',
  LOAD_FAILURE = '@films/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface Films {
  id: number
  title: string
  poster_path: string
  overview: string
}

/**
 * State types
 */
 export interface FilmsState {
   readonly data: Films[]
   readonly loading: boolean
   readonly error: boolean
 }