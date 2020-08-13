// built-in function to subscribe react components to the store(redux)
// containers job is to connect our components(frontend) to the store
import { connect } from "react-redux";
// import action we need for this container
import { fetchPlaces, updateFilter } from '../../actions/places_action';
// import our sign up form component
import Splash from "./splash";
// msp(slices of our state) & mdp(dispatches functions) contains information sent to component through props
// const mdp = (dispatch) => ({
//   // createNewUser function that we imported and return
//   // input formUser(which we determined in actions)(we get from the form)
//   createNewUser: (formUser) => dispatch(createNewUser(formUser)),
// });
// passing it in sign up component.
//does not rely on state so we do not need msp

const msp = state => ({
    places: Object.values(state.entities.places)
})

const mdp = (dispatch) => ({
    fetchPlaces: (bounds) => dispatch(fetchPlaces(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})
export default connect(msp, mdp)(Splash);
