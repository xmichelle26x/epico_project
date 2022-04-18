const initialState = {
    user: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState, action ) => {  
    if( action.type === 'SET_USER'){
        return{
            ...state,
            user: action.user
        }
    } 
    return state;
}