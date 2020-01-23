import axios from 'axios';


/**
 * action creator for craeting actions to log in user detail
 * @param {*} type 
 * @param {*} payload 
 */
export const setUserDetails = (type,payload) => {
    return {
        type,
        payload
    }
}

/**
 * action creator to fetch all the users
 */
export const setUserList = () => {
    return(dispatch) => {
        axios.get('/users.json').then(response => {
                dispatch({
                    type : 'SET_USER_LIST',
                    payload : response.data
                });
        });
    }
}