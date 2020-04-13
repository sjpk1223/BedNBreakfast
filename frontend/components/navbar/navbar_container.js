import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { openModal, closeModal } from "../../actions/modal";

import { logout } from '../../actions/session';

const msp = (state) =>{
    debugger
    return {
      currentUser: state.session.currentUser,
    };
};
// const msp = ({ session, entities: { users } }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };

const mdp = (dispatch) => {
    debugger
    return {
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
    }
};

export default connect(msp,mdp)(Navbar);