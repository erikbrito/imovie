import { Reducer } from 'redux';
import { MovieState, MovieTypes } from './types';

const INITIAL_STATE: MovieState = {
  data: [],
  error: false,
  fetch: false
};

const reducer: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.GET_SUCCESS:
      return { ...state,  error: false, data: action.payload.data };
    case MovieTypes.GET_FAILURE:
      return { ...state, error: true, data: [] };
    default:
      return state;
  }
}

export default reducer;