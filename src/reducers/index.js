import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';
import loginReducer from './loginReducer';

const Reducers = combineReducers({
    books: bookReducer,
    authors: authorReducer,
    users: loginReducer
})

export default Reducers;