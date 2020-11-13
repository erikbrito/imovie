import { all, fork } from 'redux-saga/effects'

import load from './Home/sagas'
import  watchRequestSaga from './Info/sagas'

export default function* rootSaga() {
  return yield all([
    fork (load),
    fork (watchRequestSaga)
  ])
}