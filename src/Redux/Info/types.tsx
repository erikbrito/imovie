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

/**
 * State types
 */
 export interface VideoState {
   readonly data: Video[]
   readonly fetch: boolean
   readonly error: boolean
 }