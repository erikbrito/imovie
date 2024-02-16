import { combineReducers } from 'redux'

import films from './home/reducers'
import video from './Info/reducers'
import movie from './search/reducers'

export default combineReducers ({
  films,
  video,
  movie
})