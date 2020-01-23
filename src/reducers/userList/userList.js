const initailState = {
    userList : [],
    userAuthenticated : false,
    userLoggedInDetails : {
        userName : '',
        userPassword : ''
    }
}

export default (state = initailState,actions) => {
    switch(actions.type) {
        case 'SET_USER_LIST' : return {
            ...state,
            userList : [...actions.payload]
        } 
        case 'SET_USER_DETAILS' : return {
            ...state,
            userLoggedInDetails : {
                ...state.userLoggedInDetails,
                userName : actions.payload.userName,
                userPassword : actions.payload.userPassword
            }
        }
        default : return state;
    }
}