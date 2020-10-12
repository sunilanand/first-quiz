import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Popup = ({popup}) => {
    return (
        // onHide={handleClose}
        <Modal.Dialog show={popup.show}>
            <Modal.Header closeButton>
                <Modal.Title>{popup.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{popup.message}</p>
            </Modal.Body>
    
        </Modal.Dialog>
    )
}

export default Popup;