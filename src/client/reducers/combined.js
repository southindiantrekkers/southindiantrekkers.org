import { combineReducers } from 'redux';
import  southindia  from './southindia';
import { connectRouter } from 'connected-react-router'

const combined= (history) => combineReducers({
  southindia,
  router: connectRouter(history),
});

export default combined;
