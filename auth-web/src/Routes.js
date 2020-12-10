import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import PrivateRoute from './Pages/PrivateRoute';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/usuario/:id" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes
