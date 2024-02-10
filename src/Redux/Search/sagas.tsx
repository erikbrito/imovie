import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../services/api'
import { getSuccess, getFailure } from './actions'
import { MovieTypes } from './types'
import { API_KEY } from '@env'

export default function* watchRequestMovie() {
  yield takeLatest(MovieTypes.FETCH_MOVIE, searchMovie)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* searchMovie(action: any) {
  try {
    const query = action.payload
    
    if (query !== undefined) {
      const response = yield call(api.get, `search/movie?api_key=${API_KEY}&query=${query}`)
      
      yield put(getSuccess(response.data.results))
    }
    
  } catch (error) {
    yield put(getFailure())
  }
}