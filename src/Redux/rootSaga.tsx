import { all, fork } from 'redux-saga/effects'

import load from './home/Sagas'
import  watchRequestInfo from './about/Sagas'
import  watchRequestMovie from './discover/Sagas'

export default function* rootSaga() {
  return yield all([
    fork (load),
    fork (watchRequestInfo),
    fork (watchRequestMovie),
  ])
}