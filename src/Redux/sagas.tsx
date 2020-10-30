import { call, put } from 'redux-saga/effects';
import api from '../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, `discover/movie?api_key=${ process.env.API_KEY }`);
    yield put(loadSuccess(response.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}