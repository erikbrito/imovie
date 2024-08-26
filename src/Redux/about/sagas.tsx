import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../Services/api'
import { getSuccess, getFailure } from './actions'
import { VideoTypes, PropTypes } from './types'

export default function* watchRequestInfo() {
  yield takeLatest(VideoTypes.FETCH_VIDEO, detailsVideo)
}

function* detailsVideo(action: PropTypes) {
  try {
    const movie_id = action.payload
    
    if (movie_id !== undefined) {
      const response = yield call(api.get, `/movie/${movie_id}/videos`)
      const details = yield call(api.get, `/movie/${movie_id}`)
      
      yield put(getSuccess(response.data.results, details.data))
    }
    
  } catch (error) {
    yield put(getFailure())
  }
}