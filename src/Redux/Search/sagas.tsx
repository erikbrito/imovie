import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { getSuccess, getFailure } from './actions';
import { MovieTypes } from './types';

export default function* watchRequestMovie() {
  yield takeLatest(MovieTypes.FETCH_MOVIE, searchMovie)
}

function* searchMovie(action: any) {
  try {
    const query = action.payload
    
    if (query !== undefined) {
      const response = yield call(api.get, `search/movie?api_key=${process.env.API_KEY}&query=${query}`);
      
      yield put(getSuccess(response.data.results));
    }
    
  } catch (error) {
    yield put(getFailure());
  }
}