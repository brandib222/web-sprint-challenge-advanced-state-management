import React from "react";
import ReactDOM from "react-dom";

// import all of the things
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducer from './reducers/index.js';

import "./index.css";
import App from "./App";

// create the store
const store = createStore(reducer, applyMiddleware(logger));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

// wrap it all up with the Provider

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. *** Add in all necessary components and libary methods.
//2. *** Create a store that includes thunk and logger middleware support.
//3. *** Wrap the App component in a react-redux Provider element.