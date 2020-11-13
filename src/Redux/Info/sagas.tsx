import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { getSuccess, getFailure } from './actions';
import { VideoTypes } from './types';

export default function* watchRequestSaga() {
  yield takeLatest(VideoTypes.FETCH_VIDEO, detailsVideo)
}

function* detailsVideo(action: any) {
  try {
    const id = action.payload
    
    if (id !== undefined) {
      const response = yield call(api.get, `/movie/${id}/videos?api_key=${process.env.API_KEY}`);
      
      yield put(getSuccess(response.data.results));
    }
    
  } catch (error) {
    yield put(getFailure());
  }
}