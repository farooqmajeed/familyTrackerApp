import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
}
    from '../ActionTypes';
import firebase from '../../../Config/Config';

export function LoginUser(data) {

    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(data.username, data.password)
            .then((data) => {
                return firebase.database().ref('/users/').on('value', snapshot => {
                    var allInfo = snapshot.val()
                    dispatch(loginUserSuccess(allInfo))
                    console.log(allInfo);
                    alert("Successfull Login");

                    // browserHistory.push('/app')

                })
            })
            .catch((error) => {
                console.log("Error Occured", error);
                dispatch(loginUserFail(error))
            })
    }
}
loginuser = (dispatch) => {
    return {
        type: LOGIN_USER
    }
}

loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    };
};

loginUserFail = () => {
    return {
        type: LOGIN_USER_FAIL
    };
};