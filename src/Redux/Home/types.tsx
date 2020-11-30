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
export interface Actions {
  id: number
  poster_path: string
}
export interface Animations {
  id: number
  poster_path: string
}
export interface War {
  id: number
  poster_path: string
}

/**
 * State types
 */
 export interface FilmsState {
   readonly actions: Actions[]
   readonly animations: Animations[]
   readonly war: War[]
   readonly loading: boolean
   readonly error: boolean
 }