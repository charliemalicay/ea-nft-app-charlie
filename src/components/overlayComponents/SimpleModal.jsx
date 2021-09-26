import React, { useState } from "react";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import "./SimpleModal.less";


const SimpleModal = ({ modalMessage, openModal, toggleModalHandler}) => {
    return (
        <Modal
            open={ openModal }
            onClose={ () => toggleModalHandler() }
            aria-labelledby="modal-modal-title"
        >
            <Box className="modal-container">
                <p>{ modalMessage }</p>
            </Box>
        </Modal>
    );
}


export default SimpleModal;
