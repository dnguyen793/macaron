import { combineReducers } from 'redux';
import macaronReducer from './macaron-reducer';

// calling combineReducers here
export default combineReducers({
    macaron: macaronReducer
});