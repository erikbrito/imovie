import { call, put, delay } from 'redux-saga/effects'
import api from '@Services/Api'
import { loadSuccess, loadFailure } from './Actions'

export default function* load() {
  try {
    yield delay(2000)

    const actions = yield call(
      api.get,
      `discover/movie?api_key=&with_genres=28`
    )
    const adventure = yield call(
      api.get,
      `discover/movie?api_key=&with_genres=12`
    )
    const animations = yield call(
      api.get,
      `discover/movie?api_key=&with_genres=16`
    )
    const war = yield call(api.get, `discover/movie?api_key=&with_genres=10752`)

    yield put(
      loadSuccess([
        actions?.data?.results,
        adventure?.data?.results,
        animations?.data?.results,
        war?.data?.results
      ])
    )
  } catch (err) {
    yield put(loadFailure())
  }
}
