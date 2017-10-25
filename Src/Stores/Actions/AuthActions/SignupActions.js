import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    SIGNUP_USER
}
    from '../ActionTypes';
import firebase from '../../../Config/Config';
export function signUpUser(data) {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data)
            .then((user) => {
                signupUserSuccess(user)
            })
            .catch((err) => {
                signupUserFail(err)
            });
    };
}

signupUser = (dispatch) => {
    return {
        type: SIGNUP_USER
    }
}

signupUserSuccess = (user) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: user
    };
};

signupUserFail = () => {
    return {
        type: SIGNUP_USER_FAIL
    };
};