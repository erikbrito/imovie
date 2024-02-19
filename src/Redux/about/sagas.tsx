import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api'
import { getSuccess, getFailure } from './actions'
import { VideoTypes } from './types'
import { API_KEY } from '@env'

export default function* watchRequestInfo() {
  yield takeLatest(VideoTypes.FETCH_VIDEO, detailsVideo)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* detailsVideo(action: any) {
  try {
    const movie_id = action.payload
    
    if (movie_id !== undefined) {
      const response = yield call(api.get, `/movie/${movie_id}/videos?api_key=${API_KEY}`)
      const details = yield call(api.get, `/movie/${movie_id}?api_key=${API_KEY}`)
      
      yield put(getSuccess(response.data.results, details.data))
    }
    
  } catch (error) {
    yield put(getFailure())
  }
}