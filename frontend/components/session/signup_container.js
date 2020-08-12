// built-in function to subscribe react components to the store(redux)
// containers job is to connect our components(frontend) to the store
import {connect} from 'react-redux';
// import action we need for this container
import { createNewUser } from '../../actions/session_action';
// import our sign up form component
import Signup from './signup';
// msp(slices of our state) & mdp(dispatches functions) contains information sent to component through props
const mdp = dispatch => ({
    // createNewUser function that we imported and return
    // input formUser(which we determined in actions)(we get from the form)
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

const msp = state => ({
    formtype: 'createNewUser',
})
// passing it in sign up component.
//does not rely on state so we do not need msp
export default connect(msp, mdp)(Signup);