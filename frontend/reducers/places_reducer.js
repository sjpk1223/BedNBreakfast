import { RECEIVE_PLACES, RECEIVE_PLACE } from "../actions/places_action";
import merge from 'lodash.merge'; 
const placesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLACES:
            return action.places;
        case RECEIVE_PLACE:
            return merge({}, state, { [action.place.id]: action.place }) 
        default:
            return state;
    }
};

export default placesReducer;