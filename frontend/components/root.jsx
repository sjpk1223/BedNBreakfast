// app.jsx is what puts all our components together , 
// root is what holds the app and provides resources(provider, hashrouter) to the app
import React from 'react';
// Provider is used to pass the store to all the components
// https://www.c-sharpcorner.com/article/reactcrud-operation-using-react-redux-part-two/Images/Redux%20Flow.jpg
import { Provider } from 'react-redux';
// router for react-redux dicatates which page we are one
// what handles which page gets displayed
// we need hashrouter to use the routes
import { HashRouter } from 'react-router-dom';
import App from './app';

// deconstruct store from state
// app is what holds all components
const Root = ( {store} ) => (
    // job of provider is to provide the store
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

export default Root;