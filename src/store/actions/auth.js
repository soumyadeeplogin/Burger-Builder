import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authDate = {
            email: email,
            password: password,
            returnSecureToken :true
        }
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAsS4on6cnoeq4vMqU3P42hWpcLME0Cv40"
        if(!isSignup)
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAsS4on6cnoeq4vMqU3P42hWpcLME0Cv40"
        axios.post(url, authDate)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))

        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err))
        })
    }
}