import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    SIGNUP_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,


} from '../Actions/ActionTypes';

const INITIAL_STATE = {
    email: '',
    password: '',
    signupUser: {},
    loginUser: {},
    error: '',
    loading: false,
    isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, loading: true, isAuthenticated: false, error: '' };
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, isAuthenticated: true, signupUser: action.payload };
        case SIGNUP_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', isAuthenticated: false, password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, isAuthenticated: false, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, isAuthenticated: true, loginUser: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', isAuthenticated: false, password: '', loading: false };
        default:
            return state;
    }
};    