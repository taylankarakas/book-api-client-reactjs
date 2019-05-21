import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const Reducers = combineReducers({
    books: bookReducer
})

export default Reducers;