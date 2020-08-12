import { 
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session'

// if we dont have current user we want below to be returned as default

const _nullSession = {
    currentUser: null
};

// start building reducer, reducer takes in 2 arguments(state, action)

const sessionReducer = (state = _nullSession, action) => {
    // makes sure we do not mutate the state
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // returns currentuser as an object and assigns it 
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;