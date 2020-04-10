import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar'

import { logout } from '../../actions/session';

const msp = (state) =>{
    return {
        currentUser: state.session.currentUser,
    }
};
// const msp = ({ session, entities: { users } }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

const mdp = (dispatch) =>({
    logout: () => dispatch(logout()),
});

export default connect(msp,mdp)(Navbar);