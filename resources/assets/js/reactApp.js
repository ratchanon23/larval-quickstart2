import React, { Component } from 'react';
import {render} from 'react-dom';

class HelloView extends Component {
  render() {
   return(
     <h1>Hello, world222!</h1>
     );
   }
}

var APP_CONTAINER_DOM_ID = 'app-container';
var _appDest = document.getElementById(APP_CONTAINER_DOM_ID);

if (_appDest) {
 render((
   <HelloView />
 ), _appDest);
}
