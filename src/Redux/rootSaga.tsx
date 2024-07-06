import { all, fork } from 'redux-saga/effects'

import load from './Home/sagas'
import  watchRequestInfo from './About/sagas'
import  watchRequestMovie from './Search/sagas'

export default function* rootSaga() {
  return yield all([
    fork (load),
    fork (watchRequestInfo),
    fork (watchRequestMovie),
  ])
}