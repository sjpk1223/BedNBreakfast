import { UPDATE_FILTER } from '../actions/places_action';

const defaultFilters = Object.freeze({
    bounds: {},
    min_seating: 1,
    max_seating: 10
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            const new_state = Object.assign({}, state, { [action.filter]: action.value });
            return new_state;
        default:
            return state;
    }
};

export default filtersReducer;