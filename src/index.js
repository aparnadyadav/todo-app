import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';

import App from './components/App';
import Callback from './components/Auth/Callback';
import Login from './components/Auth/Login';
import Auth from './components/Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
}

const mainRoutes = (
        <Router history={history}>
            <div>
                <Route path="/" exact render={(props) => <Login auth={auth} {...props} />} />
                <Route path="/app" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} /> 
                }}/>
            </div>
        </Router>
);

ReactDOM.render(
    mainRoutes,
    document.querySelector('#root')
);

