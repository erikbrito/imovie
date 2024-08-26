import { combineReducers } from 'redux'

import films from './Home/reducers'
import video from './About/reducers'
import movie from './Discover/reducers'

export default combineReducers ({
  films,
  video,
  movie
})