import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
 calculator: simpleReducer
})

export default rootReducer;