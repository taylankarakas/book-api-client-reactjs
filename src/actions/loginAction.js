import Api from '../api';

const api = new Api();

export const login = (datas) => {
    return dispatch => {
        api.login(datas)
            .then((response) => {
                dispatch({
                    type: 'userLogin',
                    payload: response
                })
            })
    }
}