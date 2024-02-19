import { combineReducers } from 'redux'

import films from './home/reducers'
import video from './about/reducers'
import movie from './search/reducers'

export default combineReducers ({
  films,
  video,
  movie
})