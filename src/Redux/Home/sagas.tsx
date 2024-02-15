import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { loadSuccess, loadFailure } from './actions'
import { API_KEY } from '@env'

export default function* load() {
  try {
    const actions = yield call(api.get, `discover/movie?api_key=${ API_KEY }&with_genres=28`)
    const adventure = yield call(api.get, `discover/movie?api_key=${ API_KEY }&with_genres=12`)
    const animations = yield call(api.get, `discover/movie?api_key=${ API_KEY }&with_genres=16`)
    const war = yield call(api.get, `discover/movie?api_key=${ API_KEY }&with_genres=10752`)
    
    yield put(loadSuccess([actions?.data?.results, adventure?.data?.results, animations?.data?.results, war?.data?.results]))

  } catch (err) {
    yield put(loadFailure())
  }
  // yield put(loadSuccess(actions.data.results, animations.data.results, war.data.results))
}