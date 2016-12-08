import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import ViewMain from './components/main/ViewMain';
import ContainerMain from './components/main/ContainerMain';

var APP_CONTAINER_DOM_ID = 'app-container';
var _appDest = document.getElementById(APP_CONTAINER_DOM_ID);
if (_appDest) {
  render((
    <Router history={browserHistory}>
      <Route component={ContainerMain}>
        <Route path="/react/tasks" component={ViewMain}>
        </Route>
      </Route>
    </Router>
  ), _appDest);
}