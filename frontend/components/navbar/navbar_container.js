import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { openModal, closeModal } from "../../actions/modal_action";

import { logout } from '../../actions/session_action';

const msp = (state) =>{
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
    return {
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
    }
};

export default connect(msp,mdp)(Navbar);