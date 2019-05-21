const initialState = {
    list: [],
    status: 'loading'
}

export default function bookReducer (state = initialState, { type, payload }) {
    switch (type) {
        case 'getBookSuccess':
            return {
                ...state,
                list: payload,
                status: 'loaded'
            }
    
        default:
            return state;
    }
}