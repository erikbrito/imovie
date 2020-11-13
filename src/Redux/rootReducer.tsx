import { combineReducers } from 'redux';

import films from './Home/reducers';
import video from './Info/reducers';

export default combineReducers ({
  films,
  video,
});