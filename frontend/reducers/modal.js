import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal'

const modalReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return state;
        default:
            return state;
    };
}

export default modalReducer;

