import { connect } from "react-redux";
import Modal from "./modal";
import { openModal, closeModal} from "../../actions/modal_action";
import { withRouter } from "react-router-dom";

const msp = (state) => {
    
  return {
    modal: state.modal,
  };
};
const mdp = (dispatch) => {
    
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (type) => dispatch(openModal(type)),
  };
};
export default connect(msp, mdp)(Modal);