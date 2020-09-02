import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout';
import Tracks from '../views/tracks/tracks';
import Home from '../views/home/home';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={MainLayout} path="/" />
      <RouteWithLayout
        component={Tracks}
        exact
        layout={MainLayout}
        path="/tracks"
      />
    </Switch>
  );
};

export default Routes;
