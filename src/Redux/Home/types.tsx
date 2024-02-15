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
export interface Genres {
  id: number
  poster_path: string
}

/**
 * State types
 */
export interface FilmsState {
   readonly actions: Genres[]
   readonly adventure: Genres[]
   readonly animations: Genres[]
   readonly war: Genres[]
   readonly loading: boolean
   readonly error: boolean
 }