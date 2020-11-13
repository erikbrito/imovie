import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { FilmsState } from './Home/types';
import { VideoState } from './Info/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga'

export interface AplicationState {
  films: FilmsState,
  video: VideoState
};

const SagaMiddleware = createSagaMiddleware()

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;