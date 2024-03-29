import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import "./InformativeModal.less";


const InformativeModal = (
    {
        openModal,
        toggleModalHandler,
        messageData = {
            description: "No Description", image_url: ""
        }
    }) => {

    console.log("openModal: ", openModal);

    return(
        <Modal
            open={ openModal }
            onClose={ () => toggleModalHandler() }
            aria-labelledby="modal-modal-title"
        >
            <Box className="modal-effect">
                <p>{ messageData.description }</p>
                <img src={ messageData.image_url } alt="show-image"/>
            </Box>
        </Modal>
    )
}

export default InformativeModal;
