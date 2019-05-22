const initialState = {
    list: [],
    status: 'loading',
    bookDetail: {}
}

export default function bookReducer (state = initialState, { type, payload }) {
    switch (type) {
        case 'getBookSuccess':
            return {
                ...state,
                list: payload,
                status: 'loaded'
            }
        case 'getBookDetail':
            return {
                ...state,
                bookDetail: payload
            }    

        default:
            return state;
    }
}