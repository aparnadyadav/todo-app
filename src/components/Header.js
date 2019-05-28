import React from 'react';
import LogoutButton from './Auth/LogoutButton';

const Header = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <div className="right menu">
                <div className="item"> 
                    <LogoutButton {...props} />
                </div>
            </div>
        </div>
    );
}

export default Header;