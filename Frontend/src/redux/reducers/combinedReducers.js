import {combineReducers} from 'redux';
import authenticationReducer from './authentication';

const combinedReducers = combineReducers({
    authentication: authenticationReducer
})

export default combinedReducers;