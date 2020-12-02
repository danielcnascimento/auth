import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {

    const isLogged = !!localStorage.getItem('acesso');

    return isLogged ? <Route {...props}/> : <Redirect to="/login" />
}

export default PrivateRoute
