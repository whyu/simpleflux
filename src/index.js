//ENTRY POINT

// npm modules
import React from 'react';
import ReactDOM from 'react-dom';

// flux
import flux from './flux';
const wrapFlux = flux.wrapFlux;
const composeActions = flux.composeActions;

// Actions
// import individual component Actions
// compose using composeActions and passing in the array of component actions
import actions from './actions';
const availableActions = composeActions([actions])

// Store
import store from './store';

import Main from './Main';

const FluxApp = wrapFlux(Main, actions, store);

ReactDOM.render(
    <FluxApp/>
    , document.querySelector('.react-cont')
 );


