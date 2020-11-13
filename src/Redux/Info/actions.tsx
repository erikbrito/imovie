import { action } from 'typesafe-actions';
import { VideoTypes, Video } from './types';

export const fetchVideo = (id_video: any) => action(VideoTypes.FETCH_VIDEO, id_video);

export const getSuccess = (data: Video[]) => action(VideoTypes.GET_SUCCESS, { data });

export const getFailure = () => action(VideoTypes.GET_FAILURE);