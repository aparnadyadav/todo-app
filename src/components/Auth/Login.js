import React from 'react';

const Login = ({ auth }) => {
    return (
        <div className="ui center aligned segment">
            <div className="ui buttons">
                <button className="ui button" onClick={auth.login}>Login</button>
                <div className="or"></div>
                <button className="ui positive button">Sign up</button>
            </div>
        </div>
    );
}

export default Login;