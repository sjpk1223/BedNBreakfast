// import util methods
import {
    postSession,
    postUser,
    deleteSession
} from '../util/session_api_util'

//messages we send to reducer, makes sure its spelled the same everywhere(better errors)
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

// action creators are used to return actions(POJO) with type and payload(data)
// action creators dynamically create POJO to be sent to the reducer
const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors
})
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user
    // whatever properties user has with it 
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
    // no payload
})

// we need our thunk actions creators which perfom the ajax request and actually dispatch to make the change
// we have our ability to use dispatch through thunk middleware
// dispatch sends changes to be made to the store
// only thing that can change the store are actions.

// formUser comes from our component
export const createNewUser = (formUser) => dispatch => postUser(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const login = (formUser) => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()));
