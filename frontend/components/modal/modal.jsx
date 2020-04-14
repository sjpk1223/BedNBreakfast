import LoginFormContainer from "../session/login_container";
import React from "react";
import SignupFormContainer from "../session/signup_container";

function Modal ({ modal, closeModal, removeErrors}){
    if (!modal) {
        return null;
    }

    let component;

    switch (modal){
        case "login":
            component = <LoginFormContainer />;
            break;
        case "signup":
            component = <SignupFormContainer />;
            break;
        default:
            return null;
        // case "reserve":
        //     component = <LoginFormContainer />;
        //     break;
        // case "userprofile":
        //     component = <LoginFormContainer />;
        //     break;
        //     default: 
        //     return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-background" onClick={removeErrors}>
                <div 
                    id={`${modal}`}
                    className="modal-child"
                    onClick={e => e.stopPropagation()}
                >
                {component}
                </div>
            </div>
        </div>
    );


}

export default Modal;