import Api from '../api';

const api = new Api();

export const getBooks = () => {
    return dispatch => {
        api.bookList()
            .then((response) => {
                dispatch({
                    type: 'getBookSuccess',
                    payload: response
                })
            })
    }
}