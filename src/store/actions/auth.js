import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authDaya: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        const authDate = {
            email: email,
            password: password,
            returnSecureToken :true
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAsS4on6cnoeq4vMqU3P42hWpcLME0Cv40', authDate)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data))

        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err))
        })
    }
}