import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../Components/Auth/LoginComponents';
import { LoginUser } from '../../Stores/Actions/AuthActions/LoginActions';

function mapStateToProps(state) {
    return {
        login: state.login
    }
}
function mapDispatchToProps(dispatch) {
    return {

        LoginRequest: (data) => dispatch(LoginUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

