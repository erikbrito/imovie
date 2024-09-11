import { call, put, takeLatest } from 'redux-saga/effects'
import api from '@Services/Api'
import { getSuccess, getFailure } from './Actions'
import { MovieTypes, PropTypes } from './Types'

export default function* watchRequestMovie() {
  yield takeLatest(MovieTypes.FETCH_MOVIE, searchMovie)
}

function* searchMovie(action: PropTypes) {
  try {
    const query = action.payload

    if (query !== undefined) {
      const response = yield call(api.get, `search/movie?query=${query}`)

      yield put(getSuccess(response.data.results))
    }
  } catch (error) {
    yield put(getFailure())
  }
}
