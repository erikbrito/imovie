import { combineReducers } from 'redux'

import films from './home/Reducers'
import video from './about/Reducers'
import movie from './discover/Reducers'

export default combineReducers ({
  films,
  video,
  movie
})