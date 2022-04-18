const initialState = {
    logged : false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState, action ) => {
    if( action.type === "SET_LOGGED"){
        return{
            ...state,
            logged : action.logged
        }
    }
    return state;
}