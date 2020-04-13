export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal) => {
    debugger
    return {
        type: OPEN_MODAL,
        modal: modal
    };
};

export const closeModal = (modal) => {
    debugger
    return {
        type: CLOSE_MODAL,
        modal: modal
    };
};



