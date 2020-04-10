// where we define our configureStore method
// stores our state(info)
// store is responsible for updating an apps state via its reducer
// broadcasting the state to an applications view layer via subscription
// listening for actions that tell how and when to change the global state of an application

//takes in rootReducer, preloadedState and middleware
// we want rootReducer because we want all our to go through reducers and middleware
// we want preloadedState(new or existing state) so we can have a state to render changes made
// ?? we want middleware to take the action(as a func) it will do something?(like a interceptor)
import rootReducer from '../reducers/root';
import { applyMiddleware, createStore } from 'redux';
// middleware uses thunk and logger
// dont forget to npm install redux-thunk, redux-logger
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// store will put into state

export const configureStore = (preloadedState = {} ) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
