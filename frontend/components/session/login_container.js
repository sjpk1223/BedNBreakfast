import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';


const mdp = dispatch => {
    debugger
    return {
    login: formUser => dispatch(login(formUser)),
    }
};

// const msp = state => ({
//     errors:
// })

export default connect(null, mdp)(Login);