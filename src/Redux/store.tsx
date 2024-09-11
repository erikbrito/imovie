import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { FilmsState } from './home/Types'
import { VideoState } from './about/Types'
import { MovieState } from './discover/Types'

import rootReducer from './RootReducer'
import rootSaga from './RootSaga'

export interface AplicationState {
  films: FilmsState,
  video: VideoState,
  movie: MovieState
}

const SagaMiddleware = createSagaMiddleware()

const store: Store= createStore(rootReducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export default store