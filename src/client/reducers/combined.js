import { combineReducers } from 'redux';
import  southindia  from './southindia';
import  user  from './user';

import { connectRouter } from 'connected-react-router'

const combined= (history) => combineReducers({
  southindia,
  user,
  router: connectRouter(history),
});

export default combined;
