import React from 'react';
// route is what estalished our actual URL routes( to use exact/relative path )
// switch for action.type switch cases
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute, } from '../util/route_utils';

// this is where all containers come together

const App = () => (
    <>
        <NavbarContainer/>
            <Route path='/' component={SplashContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <AuthRoute exact path='/login' component={LoginContainer} />
    </>
)

export default App;