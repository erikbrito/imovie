import { all } from 'redux-saga/effects'

import { load } from './sagas'

export default function* rootSaga() {
  return yield all([
    load(),
  ])
}