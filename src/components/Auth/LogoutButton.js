import React from 'react';

const LogoutButton = ({ auth }) => {
    return (
            <button className="ui red button" onClick={auth.logout}>
                Logout
            </button>
    );
}

export default LogoutButton;