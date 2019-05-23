import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';

const Reducers = combineReducers({
    books: bookReducer,
    authors: authorReducer
})

export default Reducers;