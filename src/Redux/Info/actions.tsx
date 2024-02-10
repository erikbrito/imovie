import { action } from 'typesafe-actions'
import { VideoTypes, Video } from './types'

export const fetchVideo = (id_video: unknown) => action(VideoTypes.FETCH_VIDEO, id_video)

export const getSuccess = (data: Video[], information: object) => action(VideoTypes.GET_SUCCESS, { data, information })

export const getFailure = () => action(VideoTypes.GET_FAILURE)