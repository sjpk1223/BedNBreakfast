import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Login from './login';
import {closeModal} from '../../actions/modal_action';


const mdp = dispatch => {
    return {
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal()),
    }
};

// const msp = state => ({
//     errors:
// })

export default connect(null, mdp)(Login);