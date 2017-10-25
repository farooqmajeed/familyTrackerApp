import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../../Components/Auth/SignupComponent';
import { signUpUser } from '../../Stores/Actions/AuthActions/SignupActions';

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch) {
    return {

        signUpRequest: (data) => dispatch(signUpUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

