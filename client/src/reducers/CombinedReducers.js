import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { people } from './peopleReducer';

const Reducers = combineReducers({
  router: routerReducer,
  people
});

export default Reducers