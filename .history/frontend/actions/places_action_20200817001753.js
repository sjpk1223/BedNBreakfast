import * as placeApiUtil from '../util/place_api_util';

export const RECEIVE_PLACES = "RECEIVE_PLACES";
export const RECEIVE_PLACE = "RECEIVE_PLACE";
export const UPDATE_FILTER = "UPDATE_FILTER";

const receivePlace = (place) => ({
    type: RECEIVE_PLACE,
    place
})

const receivePlaces = (places) => ({
    type: RECEIVE_PLACES,
    places
})

export const fetchPlace = (placeId) => dispatch => {
    return placeApiUtil.fetchPlace(placeId)
    .then(place => dispatch(receivePlace(place)));
}

export const fetchPlaces = (bounds) => dispatch => {
    return placeApiUtil.fetchPlaces(bounds)
    .then(places => dispatch(receivePlaces(places)))
}

export const postPlace = (place) => dispatch => {
    return placeApiUtil.postPlace(place)
    .then(place => dispatch(receivePlace(place)))
}

export const updateFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value

     export const updateFilter = (filter, value) => (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBenches(getState().ui.filters)(dispatch);
});