import Api from '../api';

const api =  new Api();

export const getAuthors = () => {
    return dispatch => {
        api.authorList()
            .then((response) => {
                dispatch({
                    type: 'getAuthors',
                    payload: response
                })
            })
    }
}