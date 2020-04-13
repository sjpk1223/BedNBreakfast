import { connect } from "react-redux";
import Modal from "./modal";
import { openModal, closeModal} from "../../actions/modal";
import { withRouter } from "react-router-dom";

const msp = (state) => {
    debugger
  return {
    modal: state.modal,
  };
};
const mdp = (dispatch) => {
    debugger
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (type) => dispatch(openModal(type)),
  };
};
export default connect(msp, mdp)(Modal);