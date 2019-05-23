const initialState = {
    authorList: []
}

export default (state= initialState, { type, payload }) => {
    switch (type) {
        case 'getAuthors':
            return {
                ...state,
                authorList: payload
            }
            
    
        default:
            return state;
    }
}