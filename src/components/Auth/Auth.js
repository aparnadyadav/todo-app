import auth0 from 'auth0-js';
import history from '../../history';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'graphql-example.auth0.com',
        clientID: 'rEnVTWiL5B1FvUE8f5j9IlBFRUCxmjdU',
        redirectUri: 'http://localhost:3000/callback',
        audience: `https://graphql-example.auth0.com/api/v2/`,
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                history.replace('/login');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }


    setSession = authResult => {
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('expiresAt', expiresAt);

        history.replace('/app');
    }

    logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('idToken');
        localStorage.removeItem('expiresAt');
  

        this.auth0.logout({
            returnTo: window.location.origin
        });

        history.replace('/login');
    }
}