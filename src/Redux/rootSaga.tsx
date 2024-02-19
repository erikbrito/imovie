import { all, fork } from 'redux-saga/effects'

import load from './home/sagas'
import  watchRequestInfo from './about/sagas'
import  watchRequestMovie from './search/sagas'

export default function* rootSaga() {
  return yield all([
    fork (load),
    fork (watchRequestInfo),
    fork (watchRequestMovie),
  ])
}