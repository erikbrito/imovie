import { Reducer } from 'redux';
import { VideoState, VideoTypes } from './types';

const INITIAL_STATE: VideoState = {
  data: [],
  information: {},
  error: false,
  fetch: false
};

const reducer: Reducer<VideoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VideoTypes.GET_SUCCESS:
      return { ...state,  error: false, data: action.payload.data, information: action.payload.information };
      case VideoTypes.GET_FAILURE:
        return { ...state, error: true, data: [], information: {} };
        default:
          return state;
        }
      }
      
export default reducer;