import { combineReducers } from 'redux';

import films from './Home/reducers';
import video from './Info/reducers';
import movie from './Search/reducers';

export default combineReducers ({
  films,
  video,
  movie
});