const initialState = {
    user: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'userLogin':
            let user = state.user;
            user.push(payload)
            return {
                ...state,
                user
            }
    
        default:
            return state;
    }
}